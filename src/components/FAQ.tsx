
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What is Trivia Night GPT?",
      answer: "Trivia Night GPT is an AI-powered interactive trivia game that offers a wide range of categories and difficulty levels. It provides an engaging, game-like experience with features like visual questions, scoring systems, and multiplayer support."
    },
    {
      question: "How do I play Trivia Night GPT?",
      answer: "To play, simply click the 'PLAY TRIVIA NIGHT GPT NOW' button, then choose your preferred category and difficulty level. The AI will guide you through the game, asking questions, providing hints if needed, and keeping score as you play."
    },
    {
      question: "What categories are available?",
      answer: "Trivia Night GPT offers a wide range of categories including History, Science, Pop Culture, Sports, Movies & TV, Geography, and a Random option that includes questions from all categories for a more varied experience."
    },
    {
      question: "Can I play with friends or family?",
      answer: "Absolutely! Trivia Night GPT is designed for both solo play and multiplayer experiences. You can play with family and friends, taking turns to answer questions and competing for the highest score."
    },
    {
      question: "What if I get stuck on a question?",
      answer: "Don't worry! You have access to three lifelines during each game. If you're stuck, just ask to use a lifeline and the AI will provide a helpful hint to guide you toward the correct answer."
    },
    {
      question: "Is Trivia Night GPT suitable for children?",
      answer: "Yes! Trivia Night GPT can adjust its content to be appropriate for players of all ages. When you start, you can specify if children will be playing, and the AI will customize the questions accordingly."
    },
    {
      question: "How is the scoring system calculated?",
      answer: "Correct answers earn you dollars, with the amount varying based on the difficulty level. Easy questions typically earn $100, while harder questions can earn up to $500. Streak bonuses also apply when you answer multiple questions correctly in a row."
    },
    {
      question: "Can I customize the length of the game?",
      answer: "Yes, you can set your preferred number of questions per game - choose from 5, 10, 20, or even an Infinite Mode for extended gameplay sessions."
    }
  ];
  
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg">
            Got questions about Trivia Night GPT? Find your answers here!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 glass-panel overflow-hidden transition-all duration-300"
              style={{
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards',
                animationDelay: `${0.1 + index * 0.1}s`
              }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="font-orbitron font-bold text-white text-lg">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="text-neon-blue" size={20} />
                  ) : (
                    <Plus className="text-neon-blue" size={20} />
                  )}
                </div>
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'pb-6 max-h-96' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="mailto:Contact@ai-webtools.com" 
            className="neon-button bg-transparent text-white inline-block mx-2"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-purple/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FAQ;
