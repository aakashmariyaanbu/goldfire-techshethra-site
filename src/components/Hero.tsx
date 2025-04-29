
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const eventDate = new Date('2025-05-09T09:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +eventDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1000 / 60 % 60),
          seconds: Math.floor(difference / 1000 % 60)
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="min-h-screen relative flex flex-col items-center justify-center text-white px-4 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black z-10 rounded-none"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center opacity-30"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-20 text-center pt-20">
        <div className="mb-6">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-gold text-sm font-semibold mb-4">
            May 9, 2025 • Tech Innovation Center
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-4">
            <span className="text-amber-500">TECH</span>
            <span className="bg-gradient-to-r from-[#FF4500] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">SHETHRA</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto mb-8">
            Igniting Innovation • Fueling the Future of Technology
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="btn-gold rounded-full px-8 py-3 text-lg font-bold flex items-center gap-2 animate-pulse-glow">
            Register Now <ArrowRight size={18} />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 rounded-full px-8 py-3 text-lg font-bold">
            Explore Events
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-16">
          <div className="countdown-item">
            <div className="text-3xl md:text-4xl font-bold text-gold">{timeLeft.days}</div>
            <div className="text-sm">Days</div>
          </div>
          <div className="countdown-item">
            <div className="text-3xl md:text-4xl font-bold text-gold">{timeLeft.hours}</div>
            <div className="text-sm">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="text-3xl md:text-4xl font-bold text-gold">{timeLeft.minutes}</div>
            <div className="text-sm">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="text-3xl md:text-4xl font-bold text-gold">{timeLeft.seconds}</div>
            <div className="text-sm">Seconds</div>
          </div>
        </div>
      </div>
      
      {/* Wave divider - positioned lower so it doesn't hide the timer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="w-full h-auto">
          <path fill="#0e0e10" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,186.7C384,149,480,75,576,74.7C672,75,768,149,864,176C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>;
};

export default Hero;
