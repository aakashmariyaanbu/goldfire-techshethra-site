
import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const scheduleData = [
  {
    id: 1,
    time: '08:30 - 09:00',
    title: 'Registration & Check-in',
    speaker: '',
    location: 'Main Entrance',
    category: 'ceremony'
  },
  {
    id: 2,
    time: '09:00 - 09:30',
    title: 'Opening Ceremony',
    speaker: 'Organizing Committee',
    location: 'Main Auditorium',
    category: 'ceremony'
  },
  {
    id: 3,
    time: '09:30 - 11:30',
    title: 'Web 3.0 Development Workshop',
    speaker: 'Robert Williams',
    location: 'Dev Center',
    category: 'workshop'
  },
  {
    id: 4,
    time: '10:30 - 12:30',
    title: 'Blockchain Workshop',
    speaker: 'Dr. Sofia Rodriguez',
    location: 'Workshop Hall A',
    category: 'workshop'
  },
  {
    id: 5,
    time: '12:30 - 13:30',
    title: 'Lunch Break & Networking',
    speaker: '',
    location: 'Food Court',
    category: 'break'
  },
  {
    id: 6,
    time: '13:00 - 16:00',
    title: 'Cybersecurity Challenge',
    speaker: 'James Patterson',
    location: 'Security Zone',
    category: 'competition'
  },
  {
    id: 7,
    time: '14:00 - 15:30',
    title: 'Future of Tech Talk',
    speaker: 'Industry Experts Panel',
    location: 'Main Auditorium',
    category: 'talk'
  },
  {
    id: 8,
    time: '15:00 - 17:00',
    title: 'Startup Pitch Competition',
    speaker: 'Industry Judges',
    location: 'Business Hub',
    category: 'competition'
  },
  {
    id: 9,
    time: '17:15 - 18:00',
    title: 'Awards Ceremony & Closing',
    speaker: 'Organizing Committee',
    location: 'Main Auditorium',
    category: 'ceremony'
  }
];

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
  return (
    <section id="schedule" className="section bg-[#0e0e10] text-white">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Event <span className="fire-text">Schedule</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Plan your TechShethra experience on May 9, 2025 with our comprehensive event schedule.
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 md:p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="px-6 py-3 rounded-full bg-gradient-fire text-white">
              <span className="font-bold">May 9, 2025</span>
            </div>
          </div>
          
          {scheduleData.map((item) => (
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
      </div>
    </section>
  );
};

export default Schedule;
