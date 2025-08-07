import { Card } from '../components/ui/ui/card';
import { Button } from '../components/ui/ui/button';
import { Sparkles, Zap, Heart, Trophy } from 'lucide-react';

interface WelcomeScreenProps {
  onStartQuiz: () => void;
}

export const WelcomeScreen = ({ onStartQuiz }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="text-primary text-xl sm:text-2xl" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-calibri font-bold game-title text-black text-glow">
            Which Pokémon Are You?
          </h1>
          <Zap className="text-primary text-xl sm:text-2xl" />
        </div>
        
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed px-4">
          Remember those Saturday mornings watching Pokémon? 
          Take this quiz to discover which Pokémon matches your personality!
        </p>
      </div>

      {/* CTA Section */}
      <Card className="pokedex-card max-w-sm w-full text-center">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-calibri font-bold game-title mb-2">Ready to find your match?</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Discover which Pokémon shares your spirit!
            </p>
          </div>
          
          <Button 
            variant="electric" 
            size="xl" 
            onClick={onStartQuiz}
            className="w-full"
          >
            <Trophy className="mr-2 h-5 w-5" />
            Start Quiz
          </Button>
          
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
              <span>7 Questions</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span>10 Pokémons</span>
            </div>
            <div className="flex items-center gap-1">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span>Pure Fun</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Footer */}
      <div className="text-center text-xs sm:text-sm text-muted-foreground max-w-md px-4">
        <p>
          🎮 Relive your childhood and discover which Pokémon reflects your personality!
        </p>
      </div>
    </div>
  );
};