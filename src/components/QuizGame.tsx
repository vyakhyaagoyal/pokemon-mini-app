import { useState } from 'react';
import { Card } from '../components/ui/ui/card';
import { Button } from '../components/ui/ui/button';
import { Progress } from '../components/ui/ui/progress';
import { quizQuestions } from '../data/questions';
import { pokemon } from '../data/pokemon';
import { QuizResult } from '../types/pokemon';
import { Sparkles, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface QuizGameProps {
  onComplete: (result: QuizResult) => void;
  onReset: () => void;
}

export const QuizGame = ({ onComplete, onReset }: QuizGameProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const progress = (currentQuestion / quizQuestions.length) * 100;

  const handleAnswer = (answerId: string) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answerId }));

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        calculateResult();
      }
      setIsAnimating(false);
    }, 300);
  };

  const calculateResult = () => {
    const scores: Record<string, number> = {};

    // Initialize scores
    pokemon.forEach((p) => (scores[p.id] = 0));

    // Calculate scores based on answers
    Object.entries(answers).forEach(([questionIndex, answerId]) => {
      const question = quizQuestions[parseInt(questionIndex)];
      const answer = question.answers.find(
        (a: typeof question.answers[number]) => a.id === answerId
      );

      if (answer) {
        Object.entries(answer.pokemonTraits).forEach(([pokemonId, points]) => {
          scores[pokemonId] = (scores[pokemonId] || 0) + (points as number);
        });
      }
    });

    // Find the Pokemon with the highest score
    const maxScore = Math.max(...Object.values(scores));
    const resultPokemonId = Object.entries(scores).find(
      ([_, score]) => score === maxScore
    )?.[0];
    const resultPokemon = pokemon.find((p) => p.id === resultPokemonId);

    if (resultPokemon) {
      const matchPercentage = Math.round(
        (maxScore / (quizQuestions.length * 3)) * 100
      );
      const result = { pokemon: resultPokemon, matchPercentage };
      setQuizResult(result);
      onComplete(result);

      // More visible toast
      toast.success(`You're ${resultPokemon.name}! 🎉`, {
        style: {
          background: '#fff',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '16px',
        },
      });
    }
  };

  // Native share for mobile
  const handleNativeShare = () => {
    if (quizResult && navigator.share) {
      navigator
        .share({
          title: 'My Pokémon Quiz Result',
          text: `I got ${quizResult.pokemon.name} (${quizResult.matchPercentage}% match) in the Pokémon quiz!`,
          url: 'https://pokemon-mini-app.vercel.app',
        })
        .catch((err) => console.error('Share failed:', err));
    }
  };

  // If result exists, show Result Card
  if (quizResult) {
    return (
      <Card className="max-w-md mx-auto p-6 text-center space-y-4">
        <img
          src={typeof quizResult.pokemon.image === 'string' ? quizResult.pokemon.image : quizResult.pokemon.image.src}
          alt={quizResult.pokemon.name}
          className="w-24 h-24 mx-auto"
        />

        <h2 className="text-2xl font-bold">
          You’re {quizResult.pokemon.name}! 🎉
        </h2>
        <p className="text-gray-600">
          Match Score: {quizResult.matchPercentage}%
        </p>

        {/* Share buttons */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=I got ${quizResult.pokemon.name} (${quizResult.matchPercentage}%) in the Pokémon quiz! Try it: https://pokemon-mini-app.vercel.app`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            WhatsApp
          </a>

          {/* Twitter/X */}
          <a
            href={`https://twitter.com/intent/tweet?text=I got ${quizResult.pokemon.name} (${quizResult.matchPercentage}%) in the Pokémon quiz! Try it: https://pokemon-mini-app.vercel.app`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Share on X
          </a>

          {/* Native share */}
          {'share' in navigator && (
            <Button onClick={handleNativeShare} className="bg-purple-500 text-white">
              Share
            </Button>
          )}

        </div>

        {/* Play again */}
        <Button onClick={onReset} className="mt-4">
          Play Again
        </Button>
      </Card>
    );
  }

  // Show quiz UI if no result yet
  const currentQ = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 space-y-6 max-w-screen-sm sm:max-w-screen-md mx-auto">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-primary text-lg sm:text-xl" />
          <h1 className="text-xl sm:text-2xl font-fredoka font-bold game-title text-black text-glow">
            Pokémon Quiz
          </h1>
          <Zap className="text-primary text-lg sm:text-xl" />
        </div>
        <p className="text-muted-foreground text-sm sm:text-base">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md">
        <Progress value={progress} className="h-2 sm:h-3" />
      </div>

      {/* Question Card */}
      <Card className="pokedex-card max-w-md sm:max-w-2xl w-full px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center space-y-6">
          <div className="text-4xl sm:text-6xl">{currentQ.emoji}</div>
          <h2 className="text-base sm:text-lg md:text-xl font-fredoka font-semibold px-2">
            {currentQ.question}
          </h2>

          {/* Answers */}
          <div className="flex flex-col gap-3">
            {currentQ.answers.map((answer: typeof currentQ.answers[number], index) => (
              <Button
                key={answer.id}
                variant="quiz"
                size="quiz"
                onClick={() => handleAnswer(answer.id)}
                disabled={isAnimating}
                className={`transform transition-all duration-300 hover:scale-[1.02] ${isAnimating ? 'opacity-50' : ''
                  } animate-fade-in text-sm sm:text-base w-full text-left`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 whitespace-normal">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="break-words">{answer.text}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* Reset Button */}
      <Button
        variant="ghost"
        onClick={onReset}
        className="text-muted-foreground hover:text-foreground text-sm"
      >
        Start Over
      </Button>
    </div>
  );
};
