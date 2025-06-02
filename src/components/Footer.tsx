
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark-deeper relative overflow-hidden">
      {/* Divine animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-cyber-grid opacity-10 animate-float"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-1 space-y-6">
            <Logo size="md" />
            <p className="text-gray-300 leading-relaxed">
              The Ultimate AI-Powered Trivia Experience bringing friends and families together.
            </p>
            <div className="text-xs text-gray-500 bg-black/30 p-3 rounded-lg border border-white/10">
              For informational, educational and research purposes only.
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="md:col-span-1 space-y-6">
            <h3 className="text-white text-xl font-bold mb-6 neon-text-blue">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/play" className="text-gray-300 hover:text-neon-blue transition-all duration-300 hover:translate-x-2 inline-block">
                  PLAY TRIVIA NIGHT GPT NOW
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-neon-blue transition-all duration-300 hover:translate-x-2 inline-block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover:text-neon-blue transition-all duration-300 hover:translate-x-2 inline-block">
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-neon-blue transition-all duration-300 hover:translate-x-2 inline-flex items-center"
                >
                  More AI Tools <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div className="md:col-span-1 space-y-6">
            <h3 className="text-white text-xl font-bold mb-6 neon-text-purple">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-neon-purple transition-all duration-300 hover:translate-x-2 inline-flex items-center"
                >
                  Privacy Policy <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-neon-purple transition-all duration-300 hover:translate-x-2 inline-flex items-center"
                >
                  Terms of Service <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-neon-purple transition-all duration-300 hover:translate-x-2 inline-flex items-center"
                >
                  Legal Disclaimer <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="md:col-span-1 space-y-6">
            <h3 className="text-white text-xl font-bold mb-6 neon-text-pink">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-300 hover:text-neon-pink transition-all duration-300 hover:translate-x-2 inline-flex items-center"
                >
                  <Phone size={16} className="mr-3" /> (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-300 hover:text-neon-pink transition-all duration-300 hover:translate-x-2 inline-flex items-center"
                >
                  <Mail size={16} className="mr-3" /> Contact@ai-webtools.com
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-neon-pink transition-all duration-300 hover:translate-x-2 inline-flex items-center"
                >
                  Legal Disclaimer <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gradient-to-r from-neon-blue/30 via-neon-purple/30 to-neon-pink/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neon-blue transition-all duration-300"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
          
          <div className="mt-6 md:mt-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 
                rounded-full border border-neon-blue/50 text-white hover:from-neon-blue/50 
                hover:to-neon-purple/50 transition-all duration-300 shadow-lg hover:shadow-neon-blue/50 transform hover:scale-105"
            >
              More AI Tools
            </a>
          </div>
        </div>
      </div>
      
      {/* Divine floating orbs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-neon-blue/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-neon-purple/20 rounded-full blur-2xl animate-float-delay-2"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-neon-pink/20 rounded-full blur-lg animate-float-delay-1"></div>
    </footer>
  );
};

export default Footer;
