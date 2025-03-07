
import React from 'react';
import { HelpCircle } from 'lucide-react';

interface TriviaImageProps {
  className?: string;
  size?: number;
}

const TriviaImage: React.FC<TriviaImageProps> = ({ className = "", size = 64 }) => {
  return (
    <div className={`bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full p-4 flex items-center justify-center ${className}`}>
      <HelpCircle className="text-neon-purple animate-pulse-glow" size={size} />
    </div>
  );
};

export default TriviaImage;
