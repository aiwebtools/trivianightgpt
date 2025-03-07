
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-light/80 backdrop-blur-lg py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo size={isScrolled ? 'sm' : 'md'} />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-67bb8a70f09481918b72fb813a67a82c-trivia-night-gpt" 
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button bg-neon-blue/10 text-white"
          >
            PLAY TRIVIA NIGHT GPT NOW
          </a>
          <a href="#faq" className="text-white hover:text-neon-blue transition-colors">FAQ</a>
          <a href="#disclaimer" className="text-white hover:text-neon-blue transition-colors">Disclaimer</a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-blue transition-colors"
          >
            More AI Tools
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-light/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-5 flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-67bb8a70f09481918b72fb813a67a82c-trivia-night-gpt" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-orbitron py-2 px-4 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-white/10 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PLAY TRIVIA NIGHT GPT NOW
            </a>
            <a 
              href="#faq" 
              className="text-white py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
