
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Logo from "../components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid bg-cyber-grid opacity-5"></div>
      <div className="absolute top-1/3 left-1/2 w-1/2 h-1/2 bg-neon-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-neon-purple/5 rounded-full blur-3xl"></div>
      
      <div className="glass-panel p-8 md:p-12 max-w-md w-full text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <Logo size="md" />
        </div>
        
        <h1 className="text-6xl font-orbitron font-bold mb-4 neon-text-blue">404</h1>
        <p className="text-2xl text-gray-300 mb-6">Oops! Page not found</p>
        <p className="text-gray-400 mb-8">
          The trivia question you're looking for seems to have disappeared into the digital abyss.
        </p>
        
        <a 
          href="/" 
          className="neon-button bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-white inline-flex items-center"
        >
          <ArrowLeft className="mr-2" size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
