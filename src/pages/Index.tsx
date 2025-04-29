
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Speakers from '@/components/Speakers';
import Schedule from '@/components/Schedule';
import Registration from '@/components/Registration';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-white">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Speakers />
      <Schedule />
      <Registration />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
