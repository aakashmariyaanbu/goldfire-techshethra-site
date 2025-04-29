
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Schedule from '@/components/Schedule';
import Registration from '@/components/Registration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-white">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Schedule />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
