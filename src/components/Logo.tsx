
import React from 'react';
import { Users, HelpCircle } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showTagline = true }) => {
  const sizes = {
    sm: {
      container: 'h-8',
      icon: 16,
      title: 'text-lg',
      tagline: 'text-xs',
    },
    md: {
      container: 'h-10',
      icon: 20,
      title: 'text-xl',
      tagline: 'text-sm',
    },
    lg: {
      container: 'h-16',
      icon: 28,
      title: 'text-3xl',
      tagline: 'text-base',
    },
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${sizes[size].container} aspect-square flex items-center justify-center`}>
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-blue opacity-20 rounded-full animate-pulse-glow"></div>
        <div className="relative bg-dark-lighter rounded-full p-1 flex items-center justify-center border border-white/10">
          <Users className="text-neon-blue" size={sizes[size].icon} />
          <HelpCircle 
            className="absolute text-neon-pink bottom-0 right-0 transform translate-x-1/4 translate-y-1/4" 
            size={sizes[size].icon * 0.75} 
          />
        </div>
      </div>
      <div>
        <h2 className={`font-orbitron font-bold neon-text-blue ${sizes[size].title}`}>
          Trivia Night GPT
        </h2>
        {showTagline && (
          <p className={`text-gray-400 leading-tight ${sizes[size].tagline}`}>
            Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:text-neon-pink transition-colors">AiWebTools.Ai</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Logo;
