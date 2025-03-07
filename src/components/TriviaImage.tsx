
import React from 'react';
import { HelpCircle } from 'lucide-react';

interface TriviaImageProps {
  className?: string;
  size?: number;
  showImage?: boolean;
}

const TriviaImage: React.FC<TriviaImageProps> = ({ className = "", size = 64, showImage = true }) => {
  return (
    <div className={`bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full p-4 flex items-center justify-center ${className}`}>
      {showImage ? (
        <img 
          src="/trivanight.jpg" 
          alt="Trivia Night" 
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <HelpCircle className="text-neon-purple animate-pulse-glow" size={size} />
      )}
    </div>
  );
};

export default TriviaImage;
