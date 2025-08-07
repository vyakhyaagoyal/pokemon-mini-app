import { useState } from 'react';
import { WelcomeScreen } from '../components/WelcomeScreen';
import { QuizGame } from '../components/QuizGame';
import { QuizResult } from '../components/QuizResult';
import { QuizResult as QuizResultType } from '../types/pokemon';
// import { sdk } from '@farcaster/miniapp-sdk';
type GameState = 'welcome' | 'quiz' | 'result';


  const Index = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [quizResult, setQuizResult] = useState<QuizResultType | null>(null);

  const handleStartQuiz = () => {
    setGameState('quiz');
  };

  const handleQuizComplete = (result: QuizResultType) => {
    setQuizResult(result);
    setGameState('result');
  };

  const handlePlayAgain = () => {
    setQuizResult(null);
    setGameState('welcome');
  };

  const handleReset = () => {
    setQuizResult(null);
    setGameState('welcome');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {gameState === 'welcome' && (
        <WelcomeScreen onStartQuiz={handleStartQuiz} />
      )}
      
      {gameState === 'quiz' && (
        <QuizGame 
          onComplete={handleQuizComplete}
          onReset={handleReset}
        />
      )}
      
      {gameState === 'result' && quizResult && (
        <QuizResult 
          result={quizResult}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
};

export default Index;
