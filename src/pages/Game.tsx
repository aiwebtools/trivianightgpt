
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Trophy, Clock, HelpCircle } from 'lucide-react';
import FloatingElements from '../components/FloatingElements';

const categories = [
  { id: 'history', name: 'History', icon: '📚' },
  { id: 'science', name: 'Science', icon: '🧪' },
  { id: 'popculture', name: 'Pop Culture', icon: '🎭' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'movies', name: 'Movies & TV', icon: '🎬' },
  { id: 'geography', name: 'Geography', icon: '🌍' },
  { id: 'random', name: 'Random', icon: '🎲' },
];

const difficulties = [
  { id: 'easy', name: 'Easy', icon: '🌟' },
  { id: 'medium', name: 'Medium', icon: '🌟🌟' },
  { id: 'hard', name: 'Hard', icon: '🌟🌟🌟' },
  { id: 'expert', name: 'Expert', icon: '🌟🌟🌟🌟' },
];

const Game = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [gameStep, setGameStep] = useState('setup'); // setup, playing, results

  const handleStartGame = () => {
    if (selectedCategory && selectedDifficulty) {
      setGameStep('playing');
      // In a real implementation, we would fetch questions here based on category and difficulty
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden relative px-4 py-6">
      <FloatingElements />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <button 
          onClick={handleBackToHome}
          className="flex items-center text-neon-blue hover:text-neon-blue-bright transition-colors mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </button>

        <div className="glass-panel p-8 rounded-xl">
          {gameStep === 'setup' && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 neon-text-blue">
                Welcome to Trivia Night GPT!
              </h1>
              
              <p className="text-center text-lg mb-10">
                Choose your category and difficulty level to start the game!
              </p>
              
              <Tabs defaultValue="category" className="w-full mb-8">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="category">Choose Category</TabsTrigger>
                  <TabsTrigger value="difficulty">Choose Difficulty</TabsTrigger>
                </TabsList>
                
                <TabsContent value="category">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {categories.map((category) => (
                      <Card 
                        key={category.id}
                        className={`p-4 cursor-pointer border-2 transition-all ${
                          selectedCategory === category.id 
                            ? 'border-neon-blue bg-neon-blue/10' 
                            : 'border-transparent hover:border-neon-blue/50 hover:bg-white/5'
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <div className="text-4xl text-center mb-2">{category.icon}</div>
                        <h3 className="text-center font-medium">{category.name}</h3>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="difficulty">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {difficulties.map((difficulty) => (
                      <Card 
                        key={difficulty.id}
                        className={`p-4 cursor-pointer border-2 transition-all ${
                          selectedDifficulty === difficulty.id 
                            ? 'border-neon-purple bg-neon-purple/10' 
                            : 'border-transparent hover:border-neon-purple/50 hover:bg-white/5'
                        }`}
                        onClick={() => setSelectedDifficulty(difficulty.id)}
                      >
                        <div className="text-2xl text-center mb-2">{difficulty.icon}</div>
                        <h3 className="text-center font-medium">{difficulty.name}</h3>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-center">
                <Button
                  className="neon-button bg-gradient-to-r from-neon-blue to-neon-purple text-lg py-6 px-8"
                  disabled={!selectedCategory || !selectedDifficulty}
                  onClick={handleStartGame}
                >
                  Start Trivia Night!
                </Button>
              </div>
            </>
          )}
          
          {gameStep === 'playing' && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Game Would Start Here!</h2>
              <p className="mb-6">In a full implementation, the trivia questions would appear here.</p>
              <Button onClick={() => setGameStep('setup')}>
                Back to Setup
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
