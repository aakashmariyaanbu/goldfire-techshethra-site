
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const eventCategories = [
  { id: 'all', name: 'All Events' },
  { id: 'technical', name: 'Technical' },
  { id: 'workshops', name: 'Workshops' },
  { id: 'competitions', name: 'Competitions' },
  { id: 'talks', name: 'Talks' }
];

const eventsList = [
  {
    id: 1,
    title: 'AI & Machine Learning Hackathon',
    category: 'competitions',
    image: 'https://images.unsplash.com/photo-1485163819542-13adeb5e0068?auto=format&fit=crop&w=800&q=80',
    description: 'Build innovative solutions using AI and ML technologies in this 8-hour coding marathon.',
    time: '09:00 AM - 17:00 PM',
    venue: 'Innovation Lab'
  },
  {
    id: 2,
    title: 'Blockchain Workshop',
    category: 'workshops',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
    description: 'Learn the fundamentals of blockchain technology and create your first smart contract.',
    time: '10:30 AM - 12:30 PM',
    venue: 'Workshop Hall A'
  },
  {
    id: 3,
    title: 'Cybersecurity Challenge',
    category: 'competitions',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    description: 'Test your security skills in this CTF competition featuring real-world scenarios.',
    time: '13:00 PM - 16:00 PM',
    venue: 'Security Zone'
  },
  {
    id: 4,
    title: 'Future of Tech Talk',
    category: 'talks',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    description: 'Industry experts discuss emerging technologies that will shape our future.',
    time: '14:00 PM - 15:30 PM',
    venue: 'Main Auditorium'
  },
  {
    id: 5,
    title: 'Web 3.0 Development',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80',
    description: 'Hands-on session on building decentralized applications for the next web era.',
    time: '09:30 AM - 11:30 AM',
    venue: 'Dev Center'
  },
  {
    id: 6,
    title: 'Startup Pitch Competition',
    category: 'competitions',
    image: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?auto=format&fit=crop&w=800&q=80',
    description: 'Present your tech startup idea to a panel of investors and industry leaders.',
    time: '15:00 PM - 17:00 PM',
    venue: 'Business Hub'
  }
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredEvents = activeCategory === 'all' 
    ? eventsList 
    : eventsList.filter(event => event.category === activeCategory);

  return (
    <section id="events" className="section bg-gradient-to-b from-[#0e0e10] to-[#121215] text-white">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="fire-text">Events</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join us on May 9, 2025 for a full day of innovation with our diverse range of events, 
            from hands-on workshops to intense competitions.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {eventCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category.id 
                  ? 'bg-gold text-black' 
                  : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium bg-gold/20 text-gold px-2 py-1 rounded-full">
                    {eventCategories.find(c => c.id === event.category)?.name || event.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                <div className="text-sm text-gray-300 mb-4">
                  <div className="mb-1">🕒 {event.time}</div>
                  <div>📍 {event.venue}</div>
                </div>
                <button className="flex items-center text-gold hover:text-amber-400 font-medium transition-colors">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-gold rounded-full px-8 py-3 text-lg font-bold">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
