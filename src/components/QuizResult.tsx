import { Card } from '../components/ui/ui/card';
import { Button } from '../components/ui/ui/button';
import { QuizResult as QuizResultType } from '../types/pokemon';
import { Share2, RotateCcw, Sparkles, Trophy } from 'lucide-react';
import { toast } from 'sonner';
import Image from 'next/image';

interface QuizResultProps {
  result: QuizResultType;
  onPlayAgain: () => void;
}

export const QuizResult = ({ result, onPlayAgain }: QuizResultProps) => {
  const { pokemon, matchPercentage } = result;

  const handleShare = async () => {
    const shareText = `I just discovered I'm ${pokemon.name}! 🎉 Take the "Which Pokémon Are You?" quiz and find your match!`;
    const shareUrl = window.location.href;

    try {
      if (navigator.share && navigator.canShare) {
        await navigator.share({
          title: 'Which Pokémon Are You?',
          text: shareText,
          url: shareUrl
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        toast.success('Result copied to clipboard!');
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = `${shareText} ${shareUrl}`;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        toast.success('Result copied to clipboard!');
      }
    } catch (error) {
      console.error('Share failed:', error);
      try {
        // Fallback to clipboard
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        toast.success('Result copied to clipboard!');
      } catch (clipboardError) {
        toast.error('Unable to share');
      }
    }
  };

  const getTypeColor = (type: string) => {
    const typeColors = {
      electric: 'btn-electric',
      fire: 'btn-fire',
      water: 'btn-water',
      grass: 'btn-grass',
      psychic: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
      normal: 'bg-gradient-to-r from-gray-400 to-gray-500 text-white',
      ghost: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
    };
    return typeColors[type as keyof typeof typeColors] || 'bg-primary';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Trophy className="text-primary text-2xl sm:text-3xl" />
          <h1 className="text-2xl sm:text-3xl font-fredoka font-bold game-title text-black text-glow">Your Pokémon Match!</h1>
          <Sparkles className="text-primary text-2xl sm:text-3xl" />
        </div>
      </div>

      {/* Result Card */}
      <Card className="pokedex-card max-w-2xl w-full animate-fade-in">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Pokémon Image and Basic Info */}
          <div className="space-y-4">
            <div className="relative mx-auto w-32 h-32 sm:w-48 sm:h-48">
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={192}
  height={192}
              />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-fredoka font-bold game-title text-primary">{pokemon.name}</h2>
              <div className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-lg font-bold ${getTypeColor(pokemon.type)}`}>
                {pokemon.personality}
              </div>
              <p className="text-base sm:text-lg font-semibold text-primary">
                {matchPercentage}% Match!
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-lg mx-auto px-2">
              {pokemon.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {pokemon.traits.map((trait, index) => (
                <span
                  key={trait}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm font-medium animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <Button
              variant="electric"
              size="lg"
              onClick={handleShare}
              className="flex-1"
            >
              <Share2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Share Result
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onPlayAgain}
              className="flex-1"
            >
              <RotateCcw className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Play Again
            </Button>
          </div>
        </div>
      </Card>

      {/* Fun Fact */}
      <div className="text-center text-xs sm:text-sm text-muted-foreground max-w-md px-4">
        <p>
          🎉 You're one of the {pokemon.traits.join(', ').toLowerCase()} trainers out there!
        </p>
      </div>
    </div>
  );
};