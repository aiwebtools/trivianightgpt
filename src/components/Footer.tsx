
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark-deeper relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-1">
            <Logo size="md" />
            <p className="text-gray-400 mt-4">
              The Ultimate AI-Powered Trivia Experience bringing friends and families together.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/play" className="text-gray-400 hover:text-neon-blue transition-colors">
                  PLAY TRIVIA NIGHT GPT NOW
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-neon-blue transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                >
                  More AI Tools <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                >
                  Privacy Policy <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                >
                  Terms of Service <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                >
                  Legal Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                >
                  <Phone size={16} className="mr-2" /> (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                >
                  <Mail size={16} className="mr-2" /> Contact@ai-webtools.com
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-neon-blue transition-colors flex items-center"
                >
                  Legal Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neon-blue transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-6 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 
                rounded-full border border-neon-blue/30 text-white hover:from-neon-blue/30 
                hover:to-neon-purple/30 transition-all"
            >
              More AI Tools
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
