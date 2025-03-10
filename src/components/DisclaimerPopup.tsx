
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, FileText, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if the user has already seen and accepted the disclaimer
    const hasAcceptedDisclaimer = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAcceptedDisclaimer) {
      // Show the popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save to localStorage to prevent showing again
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsOpen(false);
    
    // Show toast notification
    toast({
      title: "Welcome to Trivia Night!",
      description: "Thanks for accepting our terms. Enjoy the game!",
      duration: 5000,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md glass-panel overflow-hidden animate-scale-in">
        {/* Background decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-blue/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-purple/20 rounded-full blur-xl"></div>
        
        {/* Close button */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        
        {/* Content */}
        <div className="px-6 py-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="text-neon-blue animate-pulse-glow mr-2" size={28} />
            <h2 className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Legal Disclaimer</h2>
          </div>
          
          <div className="mb-6 space-y-4">
            <div className="flex items-start">
              <FileText className="text-neon-pink mt-1 mr-3 flex-shrink-0" size={18} />
              <p className="text-gray-300 text-sm">
                By proceeding to use Trivia Night GPT, you agree to our Terms of Service and Privacy Policy. This service is provided for entertainment purposes.
              </p>
            </div>
            
            <div className="flex items-start">
              <FileText className="text-neon-pink mt-1 mr-3 flex-shrink-0" size={18} />
              <p className="text-gray-300 text-sm">
                While we strive for accuracy, we cannot guarantee that all trivia content is 100% correct. Users are responsible for verifying any critical information.
              </p>
            </div>
            
            <div className="flex items-start">
              <FileText className="text-neon-pink mt-1 mr-3 flex-shrink-0" size={18} />
              <p className="text-gray-300 text-sm">
                For the complete terms and conditions, please refer to our full Legal Disclaimer section.
              </p>
            </div>
          </div>
          
          {/* Interactive button */}
          <div className="flex justify-center">
            <Button 
              onClick={handleAccept} 
              className="neon-button bg-gradient-to-r from-neon-blue to-neon-purple text-white font-orbitron py-3 px-8 rounded-md relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">I AGREE</span>
            </Button>
          </div>
          
          <div className="mt-4 text-center">
            <a 
              href="#disclaimer" 
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.getElementById('disclaimer')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs text-neon-blue hover:text-neon-purple transition-colors underline"
            >
              View Full Disclaimer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
