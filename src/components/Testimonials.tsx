
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Family Game Night Host",
      quote: "Trivia Night GPT completely transformed our family game nights! The kids love the visual trivia rounds, and we've learned so much together. It's the perfect balance of fun and education.",
      stars: 5
    },
    {
      name: "Mark Rodriguez",
      role: "Trivia Enthusiast",
      quote: "As someone who's played a lot of trivia games, I'm impressed by how well Trivia Night GPT customizes the difficulty. Expert mode really challenges me, and the bonus rounds keep things exciting!",
      stars: 5
    },
    {
      name: "Sarah Thompson",
      role: "Elementary School Teacher",
      quote: "I use Trivia Night GPT for my classroom activities, and my students absolutely love it! The educational content is accurate, and the engaging format keeps them eager to learn more.",
      stars: 4
    },
    {
      name: "David Williams",
      role: "Party Organizer",
      quote: "This is now my go-to entertainment for gatherings. The multiplayer support and dollar scoring system create just the right amount of friendly competition. Everyone asks me to bring it back!",
      stars: 5
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What People Are Saying</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg">
            Don't just take our word for it - see what our users think about Trivia Night GPT!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 md:p-8 relative overflow-hidden group"
              style={{
                opacity: 0,
                animation: 'fade-in 0.6s ease-out forwards',
                animationDelay: `${0.2 + index * 0.15}s`
              }}
            >
              <div className="absolute top-4 right-4 text-neon-yellow flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.stars ? "currentColor" : "none"}
                    className={i < testimonial.stars ? "text-neon-yellow" : "text-gray-600"}
                  />
                ))}
              </div>
              
              <Quote 
                size={40} 
                className="text-neon-purple/10 absolute -bottom-2 -left-2 transform rotate-180"
              />
              
              <blockquote className="text-gray-300 mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <h4 className="font-orbitron font-bold text-white group-hover:text-neon-blue transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-neon-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;
