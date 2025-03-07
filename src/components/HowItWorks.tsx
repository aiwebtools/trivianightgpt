
import React from 'react';
import { BookOpen, Settings, PlayCircle, Award } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <BookOpen size={32} className="text-neon-blue" />,
      title: "Choose Your Category",
      description: "Select from History, Science, Pop Culture, Sports, Movies & TV, Geography, or Random for a mix of everything.",
      imageUrl: "https://img.icons8.com/color/96/000000/ask-question.png"
    },
    {
      icon: <Settings size={32} className="text-neon-pink" />,
      title: "Set Difficulty Level",
      description: "Pick Easy, Medium, Hard, or Expert to match your knowledge level and customization preferences.",
      imageUrl: "https://img.icons8.com/color/96/000000/settings.png"
    },
    {
      icon: <PlayCircle size={32} className="text-neon-purple" />,
      title: "Play the Game",
      description: "Answer questions in multiple formats including multiple choice, true/false, fill-in-the-blank, and picture-based questions.",
      imageUrl: "https://img.icons8.com/color/96/000000/controller.png"
    },
    {
      icon: <Award size={32} className="text-neon-yellow" />,
      title: "Earn Rewards",
      description: "Score dollars for correct answers, unlock bonus rounds, and use lifelines when you need a hint.",
      imageUrl: "https://img.icons8.com/color/96/000000/prize.png"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg">
            Get started with Trivia Night GPT in just a few simple steps!
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector (visible on md+ screens) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink/50 transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center relative"
                style={{
                  opacity: 0,
                  animation: 'fade-in 0.6s ease-out forwards',
                  animationDelay: `${0.2 + index * 0.2}s`
                }}
              >
                {/* Step number with pulsing effect */}
                <div className="relative z-10 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full opacity-20 scale-150 animate-pulse-glow"></div>
                  <div className="w-16 h-16 flex items-center justify-center rounded-full glass-panel border border-white/10">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <span className="font-orbitron font-bold text-xl text-white">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-orbitron font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://chatgpt.com/g/g-67bb8a70f09481918b72fb813a67a82c-trivia-night-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-white inline-flex items-center"
          >
            Start Playing Now
            <PlayCircle className="ml-2" size={18} />
          </a>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 max-w-4xl opacity-10">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid"></div>
      </div>
    </section>
  );
};

export default HowItWorks;
