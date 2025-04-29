
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="https://chatgpt.com/g/g-67bb8a70f09481918b72fb813a67a82c-trivia-night-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-neon-blue transition-colors font-medium"
            >
              PLAY TRIVIA NIGHT GPT NOW
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-neon-blue transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-neon-blue transition-colors"
            >
              Disclaimer
            </a>
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
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-67bb8a70f09481918b72fb813a67a82c-trivia-night-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-neon-blue transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              PLAY TRIVIA NIGHT GPT NOW
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-neon-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-neon-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-neon-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              More AI Tools
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
