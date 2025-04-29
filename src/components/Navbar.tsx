import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl md:text-3xl font-orbitron font-bold text-slate-50"><span className="text-gold">TECH</span><span className="fire-text">SHETHRA</span></span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#speakers" className="nav-link">Speakers</a>
          <a href="#schedule" className="nav-link">Schedule</a>
          <a href="#sponsors" className="nav-link">Sponsors</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        <button className="hidden md:block btn-gold rounded-full px-6 py-2 font-semibold">Register Now</button>
        
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full py-4 shadow-lg animate-scale-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#about" className="text-white hover:text-gold py-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#events" className="text-white hover:text-gold py-2" onClick={() => setIsMenuOpen(false)}>Events</a>
            <a href="#speakers" className="text-white hover:text-gold py-2" onClick={() => setIsMenuOpen(false)}>Speakers</a>
            <a href="#schedule" className="text-white hover:text-gold py-2" onClick={() => setIsMenuOpen(false)}>Schedule</a>
            <a href="#sponsors" className="text-white hover:text-gold py-2" onClick={() => setIsMenuOpen(false)}>Sponsors</a>
            <a href="#contact" className="text-white hover:text-gold py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <button className="btn-gold rounded-full px-6 py-2 font-semibold self-start">Register Now</button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;