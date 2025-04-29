
import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    id: 'standard',
    name: 'Standard Pass',
    price: '$99',
    description: 'Access to all general sessions and exhibits',
    features: [
      'All keynote sessions',
      'Exhibition area access',
      'Networking events',
      'Conference materials',
      'Coffee breaks'
    ],
    cta: 'Register Now',
    popular: false
  },
  {
    id: 'premium',
    name: 'Premium Pass',
    price: '$199',
    description: 'Full access to all events and exclusive workshops',
    features: [
      'All Standard Pass benefits',
      'Workshop participation',
      'Competition entry',
      'Priority seating',
      'Lunch included',
      'Official certificate'
    ],
    cta: 'Get Premium Access',
    popular: true
  },
  {
    id: 'vip',
    name: 'VIP Pass',
    price: '$349',
    description: 'Complete experience with exclusive benefits',
    features: [
      'All Premium Pass benefits',
      'Private sessions with speakers',
      'VIP lounge access',
      'Gala dinner invitation',
      'Exclusive swag bag',
      'One year digital membership'
    ],
    cta: 'Secure VIP Access',
    popular: false
  }
];

const Registration = () => {
  return (
    <section id="registration" className="section bg-[#121215] text-white">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Register <span className="fire-text">Now</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Secure your spot at TechShethra 2025 and be part of this transformative tech experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`rounded-xl overflow-hidden relative ${
                plan.popular ? 'transform md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gold text-black py-1 px-4 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`h-full flex flex-col ${
                plan.popular 
                ? 'bg-gradient-to-br from-[#FFD700]/20 to-[#FF4500]/20 backdrop-blur-md border border-gold' 
                : 'bg-black/50 backdrop-blur-md'
              }`}>
                <div className="p-8 border-b border-white/10">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold text-gold">{plan.price}</span>
                    <span className="text-gray-400">per person</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`p-0.5 rounded-full mt-1 ${
                          plan.popular ? 'bg-gold' : 'bg-gray-700'
                        }`}>
                          <Check size={14} className={plan.popular ? 'text-black' : 'text-white'} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0">
                  <button 
                    className={`w-full py-3 rounded-full font-bold transition-all ${
                      plan.popular 
                      ? 'bg-gold text-black hover:bg-amber-400' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-black/50 backdrop-blur-md rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Group Registration</h3>
          <p className="text-gray-300 mb-6">
            Special discounts available for groups of 5 or more participants. 
            Contact us directly for custom packages.
          </p>
          <button className="btn-fire rounded-full px-8 py-3 text-lg font-bold">
            Contact for Group Rates
          </button>
        </div>
      </div>
    </section>
  );
};

export default Registration;
