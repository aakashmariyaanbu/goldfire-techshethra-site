
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center transition-transform duration-300 hover:scale-105">
          <span className="text-2xl md:text-3xl font-orbitron font-bold">
            <span className="text-white">TECH</span>
            <span className="bg-gradient-to-r from-white to-amber-500 bg-clip-text text-transparent">SHETHRA</span>
          </span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {['about', 'events', 'schedule', 'registration', 'contact'].map((item) => (
            <HoverCard key={item}>
              <HoverCardTrigger asChild>
                <a 
                  href={`#${item}`} 
                  className="nav-link relative overflow-hidden group"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="bg-black/90 border-gold text-white p-3">
                <div className="text-sm">
                  Visit our {item.charAt(0).toUpperCase() + item.slice(1)} section
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        
        <button className="hidden md:block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-full px-6 py-2 font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
          Register Now
        </button>
        
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full py-4 shadow-lg animate-scale-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {['about', 'events', 'schedule', 'registration', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="text-white hover:text-gold py-2 transform transition-all duration-300 hover:translate-x-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-full px-6 py-2 font-semibold self-start transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
