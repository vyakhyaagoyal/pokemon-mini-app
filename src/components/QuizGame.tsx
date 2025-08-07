import { useState, useEffect } from 'react';
import { Card } from '../components/ui/ui/card';
import { Button } from '../components/ui/ui/button';
import { Progress } from '../components/ui/ui/progress';
import { quizQuestions } from '../data/questions';
import { pokemon } from '../data/pokemon';
import { Pokemon, QuizResult } from '../types/pokemon';
import { Sparkles, Heart, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface QuizGameProps {
  onComplete: (result: QuizResult) => void;
  onReset: () => void;
}

export const QuizGame = ({ onComplete, onReset }: QuizGameProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  const handleAnswer = (answerId: string) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnswers(prev => ({ ...prev, [currentQuestion]: answerId }));
    
    // Add a small delay for the animation
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        calculateResult();
      }
      setIsAnimating(false);
    }, 300);
  };

  const calculateResult = () => {
    const scores: Record<string, number> = {};
    
    // Initialize scores
    pokemon.forEach(p => scores[p.id] = 0);
    
    // Calculate scores based on answers
    Object.entries(answers).forEach(([questionIndex, answerId]) => {
      const question = quizQuestions[parseInt(questionIndex)];
      const answer = question.answers.find((a: typeof question.answers[number]) => a.id === answerId);
      
      if (answer) {
        Object.entries(answer.pokemonTraits).forEach(([pokemonId, points]) => {
          scores[pokemonId] = (scores[pokemonId] || 0) + points;
        });
      }
    });
    
    // Find the Pokemon with the highest score
    const maxScore = Math.max(...Object.values(scores));
    const resultPokemonId = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0];
    const resultPokemon = pokemon.find(p => p.id === resultPokemonId);
    
    if (resultPokemon) {
      const matchPercentage = Math.round((maxScore / (quizQuestions.length * 3)) * 100);
      onComplete({ pokemon: resultPokemon, matchPercentage });
      toast.success(`You're ${resultPokemon.name}! 🎉`);
    }
  };

  const currentQ = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-primary text-lg sm:text-xl" />
          <h1 className="text-xl sm:text-2xl font-fredoka font-bold game-title text-black text-glow">Pokémon Quiz</h1>
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
      <Card className="pokedex-card max-w-2xl w-full">
        <div className="text-center space-y-6">
          <div className="text-4xl sm:text-6xl">{currentQ.emoji}</div>
          <h2 className="text-lg sm:text-xl font-fredoka font-semibold px-2">{currentQ.question}</h2>
          
          <div className="grid gap-3">
            {currentQ.answers.map((answer, index) => (
              <Button
                key={answer.id}
                variant="quiz"
                size="quiz"
                onClick={() => handleAnswer(answer.id)}
                disabled={isAnimating}
                className={`transform transition-all duration-300 hover:scale-[1.02] ${
                  isAnimating ? 'opacity-50' : ''
                } animate-fade-in text-sm sm:text-base`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs sm:text-sm">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-left">{answer.text}</span>
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