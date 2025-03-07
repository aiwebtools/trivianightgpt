
import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <Logo size="lg" />
            <p className="text-gray-400 mt-4 max-w-md">
              Bringing Friends & Families Together with the Power of AI Trivia!
              Test your knowledge and have fun with our unique AI-powered trivia experience.
            </p>
            <div className="mt-6 flex gap-4">
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Mail size={18} className="mr-2" />
                Contact@ai-webtools.com
              </a>
            </div>
            <div className="mt-3 flex gap-4">
              <a 
                href="tel:+14758008096" 
                className="flex items-center text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Phone size={18} className="mr-2" />
                (475) 800-8096
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="font-orbitron font-bold text-white text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67bb8a70f09481918b72fb813a67a82c-trivia-night-gpt" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                >
                  PLAY TRIVIA NIGHT GPT NOW
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                >
                  More AI Tools
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3">
            <h3 className="font-orbitron font-bold text-white text-xl mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                >
                  Privacy Policy
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                >
                  Terms of Service
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-white inline-flex items-center rounded-full"
              >
                More AI Tools
                <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-blue transition-colors"
            >
              © {currentYear} AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
