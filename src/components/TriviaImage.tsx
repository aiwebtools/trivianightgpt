
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
          src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/trivanight.jpg/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:22" 
          alt="Trivia Night" 
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            console.log("Image failed to load, falling back to icon");
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loop
            target.style.display = 'none';
            const parent = target.parentNode as HTMLElement;
            if (parent) {
              const icon = document.createElement('div');
              icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-neon-purple animate-pulse-glow"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
              parent.appendChild(icon);
            }
          }}
        />
      ) : (
        <HelpCircle className="text-neon-purple animate-pulse-glow" size={size} />
      )}
    </div>
  );
};

export default TriviaImage;
