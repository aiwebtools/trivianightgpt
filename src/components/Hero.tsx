
import React from 'react';
import { ArrowRight, Users, TrendingUp, Award, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-neon-purple/10 border border-neon-purple/20">
              <span className="text-neon-purple text-sm font-medium">The Ultimate Trivia Experience!</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="neon-text-blue">Trivia Night GPT</span>
              <br />
              <span className="text-white">Fun for the Whole Family</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              Bringing Friends & Families Together with the Power of AI Trivia!
              Test your knowledge with categories from History to Pop Culture in a high-energy 
              trivia competition!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://chatgpt.com/g/g-67bb8a70f09481918b72fb813a67a82c-trivia-night-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-white group"
              >
                PLAY TRIVIA NIGHT GPT NOW
                <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </a>
              <a
                href="#how-it-works"
                className="neon-button bg-transparent text-white"
              >
                Learn More
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="flex items-center gap-2">
                <Users className="text-neon-blue" size={20} />
                <span className="text-gray-300">Multiplayer</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-neon-pink" size={20} />
                <span className="text-gray-300">Score System</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-neon-yellow" size={20} />
                <span className="text-gray-300">All Ages</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-neon-purple" size={20} />
                <span className="text-gray-300">AI-Generated</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-xl transform -rotate-3"></div>
              <div className="relative glass-panel p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/trivanight.jpg/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true" 
                  alt="Trivia Night GPT" 
                  className="w-full h-auto rounded-lg mb-4 shadow-lg"
                  style={{ 
                    opacity: 0, 
                    animation: 'fade-in 1s ease-out 0.5s forwards'
                  }}
                />
                <div className="bg-dark-lighter/50 backdrop-blur-md rounded-lg p-4 -mt-16 mr-8 ml-8 relative border border-white/10">
                  <h3 className="font-orbitron text-xl text-white mb-2">Welcome to Trivia Night!</h3>
                  <p className="text-gray-300">Ready to test your knowledge? Choose your category and difficulty level!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/2 w-2/3 h-1/2 bg-neon-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-neon-purple/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
