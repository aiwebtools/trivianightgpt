
import React from 'react';
import { Brain, Target, Zap, Users, Award, Star, Timer, Gift, ImageIcon, Settings, HelpCircle } from 'lucide-react';
import TriviaImage from './TriviaImage';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="text-neon-blue" size={24} aria-hidden="true" />,
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
    <section id="features" className="py-20 relative" role="main" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="features-heading" className="section-title">Amazing AI Trivia Features</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg">
            Discover all the exciting features that make Trivia Night GPT the ultimate AI-powered trivia experience!
          </p>
        </header>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <TriviaImage className="w-full max-w-md mx-auto" size={128} showImage={true} />
          </div>
          <article className="w-full md:w-1/2">
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-white flex items-center gap-2">
              The Ultimate AI Trivia Experience <HelpCircle className="text-neon-pink" size={24} aria-hidden="true" />
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Trivia Night GPT brings the excitement of trivia night to your screen with AI-powered questions across multiple categories and difficulty levels. Challenge yourself, friends, and family to see who knows the most!
            </p>
            <div className="flex items-center gap-3 text-neon-blue">
              <HelpCircle size={20} aria-hidden="true" />
              <span>Thousands of unique AI-generated trivia questions</span>
            </div>
          </article>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list">
          {features.map((feature, index) => (
            <article 
              key={index} 
              className="glass-panel p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(45,226,230,0.15)] group"
              style={{ 
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards',
                animationDelay: `${0.1 + index * 0.1}s`
              }}
              role="listitem"
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
            </article>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-1/3 h-1/3 bg-neon-pink/5 rounded-full blur-3xl -translate-y-1/2" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-neon-blue/5 rounded-full blur-3xl" aria-hidden="true"></div>
    </section>
  );
};

export default Features;
