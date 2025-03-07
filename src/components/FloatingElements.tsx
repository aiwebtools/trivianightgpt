
import React, { useEffect, useState } from 'react';
import { HelpCircle, Star } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const [questionMarks, setQuestionMarks] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    // Generate shooting stars
    const generateStars = () => {
      const starsArray = [];
      const starCount = Math.min(15, window.innerWidth / 100);
      
      for (let i = 0; i < starCount; i++) {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 5 + Math.random() * 5;
        const size = 1 + Math.random() * 2;
        
        starsArray.push(
          <div 
            key={`star-${i}`}
            className="absolute w-px h-px bg-white rounded-full z-0"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              boxShadow: `0 0 ${size}px ${size/2}px rgba(255, 255, 255, 0.8)`,
              animation: `shooting-star ${duration}s linear ${delay}s infinite`
            }}
          />
        );
      }
      
      setStars(starsArray);
    };
    
    // Generate floating question marks
    const generateQuestionMarks = () => {
      const marksArray = [];
      const markCount = Math.min(12, window.innerWidth / 120);
      
      for (let i = 0; i < markCount; i++) {
        const size = 20 + Math.random() * 30;
        const top = Math.random() * 200 - 50;
        const left = Math.random() * 100;
        const delay = Math.random() * 4;
        const duration = 8 + Math.random() * 7;
        const opacity = 0.05 + Math.random() * 0.15;
        const rotation = Math.random() * 360;
        
        marksArray.push(
          <div 
            key={`qmark-${i}`}
            className="absolute z-0"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animation: `float ${duration}s ease-in-out ${delay}s infinite`,
              transform: `rotate(${rotation}deg)`
            }}
          >
            <HelpCircle 
              size={size} 
              className="text-neon-blue"
              style={{ opacity }}
            />
          </div>
        );
      }
      
      setQuestionMarks(marksArray);
    };
    
    generateStars();
    generateQuestionMarks();
    
    const handleResize = () => {
      generateStars();
      generateQuestionMarks();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {stars}
      {questionMarks}
    </div>
  );
};

export default FloatingElements;
