
import React, { useState } from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';

const tabs = [
  { id: 'day1', label: 'Day 1', date: 'August 15, 2025' },
  { id: 'day2', label: 'Day 2', date: 'August 16, 2025' },
  { id: 'day3', label: 'Day 3', date: 'August 17, 2025' }
];

const scheduleData = {
  day1: [
    {
      id: 1,
      time: '09:00 - 10:00',
      title: 'Opening Ceremony',
      speaker: 'Organizing Committee',
      location: 'Main Auditorium',
      category: 'ceremony'
    },
    {
      id: 2,
      time: '10:30 - 12:00',
      title: 'AI & Machine Learning Hackathon Kickoff',
      speaker: 'Dr. Ava Chen',
      location: 'Innovation Lab',
      category: 'competition'
    },
    {
      id: 3,
      time: '12:30 - 13:30',
      title: 'Lunch Break',
      speaker: '',
      location: 'Food Court',
      category: 'break'
    },
    {
      id: 4,
      time: '14:00 - 16:00',
      title: 'Blockchain Workshop',
      speaker: 'Robert Williams',
      location: 'Workshop Hall A',
      category: 'workshop'
    },
    {
      id: 5,
      time: '16:30 - 18:00',
      title: 'Networking Mixer',
      speaker: '',
      location: 'Exhibition Hall',
      category: 'networking'
    }
  ],
  day2: [
    {
      id: 6,
      time: '09:00 - 10:00',
      title: 'Day 2 Opening Remarks',
      speaker: 'Organizing Committee',
      location: 'Main Auditorium',
      category: 'ceremony'
    },
    {
      id: 7,
      time: '10:00 - 12:00',
      title: 'Cybersecurity Challenge',
      speaker: 'James Patterson',
      location: 'Security Zone',
      category: 'competition'
    },
    {
      id: 8,
      time: '12:30 - 13:30',
      title: 'Lunch Break',
      speaker: '',
      location: 'Food Court',
      category: 'break'
    },
    {
      id: 9,
      time: '14:00 - 15:30',
      title: 'Panel Discussion: Emerging Tech Trends',
      speaker: 'Industry Leaders Panel',
      location: 'Conference Room B',
      category: 'talk'
    },
    {
      id: 10,
      time: '16:00 - 18:00',
      title: 'Future of Tech Talk',
      speaker: 'Dr. Sofia Rodriguez',
      location: 'Main Auditorium',
      category: 'talk'
    }
  ],
  day3: [
    {
      id: 11,
      time: '09:30 - 11:30',
      title: 'Web 3.0 Development Workshop',
      speaker: 'Robert Williams',
      location: 'Dev Center',
      category: 'workshop'
    },
    {
      id: 12,
      time: '12:00 - 13:00',
      title: 'Lunch Break',
      speaker: '',
      location: 'Food Court',
      category: 'break'
    },
    {
      id: 13,
      time: '14:00 - 16:00',
      title: 'Startup Pitch Competition',
      speaker: 'Industry Judges',
      location: 'Business Hub',
      category: 'competition'
    },
    {
      id: 14,
      time: '16:30 - 17:30',
      title: 'Awards Ceremony',
      speaker: 'Organizing Committee',
      location: 'Main Auditorium',
      category: 'ceremony'
    },
    {
      id: 15,
      time: '18:00 - 20:00',
      title: 'Closing Gala Dinner',
      speaker: '',
      location: 'Grand Hall',
      category: 'networking'
    }
  ]
};

const getCategoryColor = (category) => {
  switch (category) {
    case 'workshop':
      return 'bg-blue-500/20 text-blue-300';
    case 'competition':
      return 'bg-red-500/20 text-red-300';
    case 'talk':
      return 'bg-purple-500/20 text-purple-300';
    case 'networking':
      return 'bg-green-500/20 text-green-300';
    case 'ceremony':
      return 'bg-gold/20 text-gold';
    case 'break':
      return 'bg-gray-500/20 text-gray-300';
    default:
      return 'bg-white/10 text-white';
  }
};

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('day1');

  return (
    <section id="schedule" className="section bg-[#0e0e10] text-white">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Event <span className="fire-text">Schedule</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Plan your TechShethra experience with our comprehensive event schedule.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full flex flex-col items-center transition-all ${
                activeTab === tab.id 
                ? 'bg-gradient-fire text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              <span className="font-bold">{tab.label}</span>
              <span className="text-xs opacity-80">{tab.date}</span>
            </button>
          ))}
        </div>

        <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 md:p-8">
          {scheduleData[activeTab].map((item) => (
            <div 
              key={item.id}
              className="mb-6 p-4 md:p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
            >
              <div className="md:w-1/5">
                <div className="flex items-center text-gold mb-2">
                  <Clock size={16} className="mr-2" />
                  <span>{item.time}</span>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </div>
              </div>
              
              <div className="md:w-3/5">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                {item.speaker && (
                  <p className="text-gray-300">Speaker: {item.speaker}</p>
                )}
              </div>
              
              <div className="md:w-1/5 flex items-center text-gray-400">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <a 
            href="#" 
            className="flex items-center gap-2 text-gold hover:text-amber-400 font-bold transition-colors"
          >
            <Calendar size={20} />
            Download Full Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
