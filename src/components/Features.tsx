
import React from 'react';
import { Brain, Target, Zap, Users, Award, Star, Timer, Gift, ImageIcon, Settings } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="text-neon-blue" size={24} />,
      title: "Multiple Categories",
      description: "From History to Pop Culture, Sports to Science, and everything in between!"
    },
    {
      icon: <Target className="text-neon-pink" size={24} />,
      title: "Adjustable Difficulty",
      description: "Choose from Easy, Medium, Hard, or Expert to match your knowledge level."
    },
    {
      icon: <Zap className="text-neon-yellow" size={24} />,
      title: "Dynamic Questions",
      description: "Multiple choice, true/false, fill in the blank, and picture-based formats."
    },
    {
      icon: <Users className="text-neon-purple" size={24} />,
      title: "Multiplayer Support",
      description: "Play solo or challenge friends and family to see who knows the most!"
    },
    {
      icon: <Award className="text-neon-blue" size={24} />,
      title: "Point System",
      description: "Earn dollars for correct answers with bonus multipliers for streaks."
    },
    {
      icon: <Star className="text-neon-yellow" size={24} />,
      title: "Bonus Rounds",
      description: "Lightning rounds, double or nothing, and mystery categories keep it exciting."
    },
    {
      icon: <Timer className="text-neon-pink" size={24} />,
      title: "Timed Answers",
      description: "Race against the clock to answer questions before time runs out!"
    },
    {
      icon: <Gift className="text-neon-purple" size={24} />,
      title: "Three Lifelines",
      description: "Use up to three lifelines when you need a hint to solve a tough question."
    },
    {
      icon: <ImageIcon className="text-neon-blue" size={24} />,
      title: "Visual Trivia",
      description: "AI-generated images for picture-based questions add an extra challenge."
    },
    {
      icon: <Settings className="text-neon-green" size={24} />,
      title: "Customizable Rounds",
      description: "Set your preferred number of questions: 5, 10, 20, or Infinite Mode."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Amazing Features</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg">
            Discover all the exciting features that make Trivia Night GPT the ultimate AI-powered trivia experience!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(45,226,230,0.15)] group"
              style={{ 
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards',
                animationDelay: `${0.1 + index * 0.1}s`
              }}
            >
              <div className="mb-4 p-3 inline-flex rounded-lg bg-dark-lighter border border-white/10 group-hover:border-neon-blue/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3 text-white group-hover:text-neon-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-1/3 h-1/3 bg-neon-pink/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-neon-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Features;
