
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import DisclaimerPopup from '../components/DisclaimerPopup';

const Index = () => {
  useEffect(() => {
    // Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Add smooth fade-in animation to sections when they come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {});
      });
      
      document.querySelectorAll('section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden relative">
      {/* SEO-friendly structured content */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Free AI Tools - Trivia Night GPT",
          "description": "Access the best free AI tools including Trivia Night GPT - an AI-powered trivia game with multiple categories and difficulty levels.",
          "url": "https://aiwebtools.ai/",
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "Trivia Night GPT",
            "applicationCategory": "GameApplication",
            "operatingSystem": "Web Browser"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "AI Web Tools",
                "item": "https://aiwebtools.ai/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Trivia Night GPT",
                "item": "https://aiwebtools.ai/#hero"
              }
            ]
          }
        })}
      </script>

      {/* Divine background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-900/10 animate-pulse-glow"></div>
      <div className="fixed inset-0 bg-cyber-grid opacity-5"></div>
      
      {/* Background floating elements */}
      <FloatingElements />
      
      {/* Disclaimer Popup */}
      <DisclaimerPopup />
      
      {/* Main Content with Semantic HTML */}
      <div className="relative z-10">
        <Header />
        <main role="main">
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <Disclaimer />
        </main>
        <Footer />
      </div>
      
      {/* Divine ambient lighting */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-float-delay-1"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-neon-pink/5 rounded-full blur-3xl animate-float-delay-2"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-neon-yellow/5 rounded-full blur-3xl animate-float"></div>
      </div>
    </div>
  );
};

export default Index;
