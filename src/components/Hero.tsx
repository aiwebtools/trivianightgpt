
import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import TriviaImage from './TriviaImage';

const Hero = () => {
  return (
    <section id="hero" className="py-20 md:py-32 relative" role="banner">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <header>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-orbitron">
              <span className="neon-text-blue">Trivia Night</span> <span className="neon-text-purple">GPT</span>
            </h1>
          </header>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 flex items-center justify-center gap-2">
            Bringing Friends & Families Together with the Power of AI Trivia!
            <HelpCircle className="text-neon-pink animate-pulse-glow" size={24} aria-hidden="true" />
          </p>
          
          <nav className="space-y-4 md:space-y-0 md:space-x-4 md:flex mb-12" role="navigation" aria-label="Main actions">
            <a href="https://chatgpt.com/g/g-67bb8a70f09481918b72fb813a67a82c-trivia-night-gpt" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Play Trivia Night GPT - Free AI Trivia Game">
              <Button className="neon-button bg-gradient-to-r from-neon-blue to-neon-purple text-white text-lg px-8 py-6">
                PLAY TRIVIA NIGHT GPT NOW
              </Button>
            </a>
            
            <a href="#features" aria-label="Learn more about AI trivia features">
              <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 text-lg px-8 py-6">
                Learn More
              </Button>
            </a>
          </nav>
          
          <article className="glass-panel p-6 md:p-8 max-w-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-neon-purple flex-shrink-0">
                <TriviaImage size={64} showImage={true} className="w-full h-full" alt="Trivia Night GPT AI Game Interface" />
              </div>
              <div className="text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-2">The Ultimate AI Trivia Experience!</h2>
                <p className="text-gray-300">
                  Choose from 7 exciting categories, 4 difficulty levels, and challenge yourself with
                  multiple question formats including multiple choice, true/false, and image-based trivia!
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 right-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/80 to-transparent" aria-hidden="true"></div>
      <div className="absolute -bottom-10 left-1/4 w-32 h-32 bg-neon-blue/30 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
