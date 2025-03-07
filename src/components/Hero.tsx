
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-orbitron">
            <span className="neon-text-blue">Trivia Night</span> <span className="neon-text-purple">GPT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 flex items-center justify-center gap-2">
            Bringing Friends & Families Together with the Power of AI Trivia!
            <HelpCircle className="text-neon-pink animate-pulse-glow" size={24} />
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex mb-12">
            <Link to="/play">
              <Button className="neon-button bg-gradient-to-r from-neon-blue to-neon-purple text-white text-lg px-8 py-6">
                PLAY TRIVIA NIGHT GPT NOW
              </Button>
            </Link>
            
            <a href="#features">
              <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 text-lg px-8 py-6">
                Learn More
              </Button>
            </a>
          </div>
          
          <div className="glass-panel p-6 md:p-8 max-w-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-neon-purple flex-shrink-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                <HelpCircle className="text-neon-purple" size={64} />
              </div>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2">The Ultimate Trivia Experience!</h3>
                <p className="text-gray-300">
                  Choose from 7 exciting categories, 4 difficulty levels, and challenge yourself with
                  multiple question formats including multiple choice, true/false, and image-based trivia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 right-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/80 to-transparent"></div>
      <div className="absolute -bottom-10 left-1/4 w-32 h-32 bg-neon-blue/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
