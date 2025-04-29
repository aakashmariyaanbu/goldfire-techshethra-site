
import React from 'react';
import { Zap, Users, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-[#0e0e10] text-white">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="fire-text">TechShethra</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A premier technical symposium that brings together innovators, thought leaders, and tech enthusiasts
            to explore cutting-edge advancements and shape the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="relative">
              <div className="bg-gradient-fire rounded-lg p-1">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Tech Conference" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-black p-4 rounded-lg animate-float hidden md:block">
                <div className="text-gold font-bold text-4xl">8+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Igniting Innovation Since 2017</h3>
            <p className="text-gray-300 mb-6">
              TechShethra has been at the forefront of technological discourse for over 8 years, 
              providing a platform for breakthrough ideas and transformative innovations. What started 
              as a small college event has grown into one of the region's most anticipated tech symposiums.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-gold/20 rounded-lg">
                  <Zap size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold">Innovation Focus</h4>
                  <p className="text-sm text-gray-400">Cutting-edge tech showcases</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-3 bg-gold/20 rounded-lg">
                  <Users size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold">5000+ Attendees</h4>
                  <p className="text-sm text-gray-400">Global tech enthusiasts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-3 bg-gold/20 rounded-lg">
                  <Globe size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold">Global Reach</h4>
                  <p className="text-sm text-gray-400">International speakers & participants</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-3 bg-gold/20 rounded-lg">
                  <Award size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold">25+ Events</h4>
                  <p className="text-sm text-gray-400">Workshops, hackathons & panels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
