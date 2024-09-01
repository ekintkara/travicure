import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const FeatureItem = ({ title, content, isOpen, toggle }) => {
  return (
    <div className="bg-[rgba(90,91,105,0.32)] p-4 rounded-lg shadow-lg">
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        className="flex items-center justify-between w-full text-left text-gray-100 focus:outline-none"
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2">
          <div className="relative mb-4 bg-gray-300 h-64 rounded-lg">
            <p className="absolute inset-0 flex items-center justify-center text-gray-600">Feature Image</p>
          </div>
          <p className="text-gray-200">{content}</p>
        </div>
      )}
    </div>
  );
};

const Features = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: 'Building and Resource Management',
      content: 'Construction and upgrading of buildings and development of resource fields.',
    },
    {
      title: 'Troop Training',
      content: "Training of troops and improvements at the blacksmith's workshop.",
    },
    {
      title: 'Festivals',
      content: 'Automatic organization of festivals.',
    },
    {
      title: 'Attack Management',
      content: 'Detecting attacks, withdrawing troops, and spending resources.',
    },
    {
      title: 'Notifications',
      content: 'Sending notifications to the user.',
    },
    {
      title: 'Defense Management',
      content: 'Planning and managing defense operations.',
    },
    {
      title: 'Resource Transfer and Trade',
      content: 'Transferring resources and automatic NPC trading.',
    },
    {
      title: 'Farming and Attack Planning',
      content: 'Conducting farming, troop gathering, attack planning, and sending waves.',
    },
    {
      title: 'Online Status Detection',
      content: 'Monitoring the online status of multihunters and other players.',
    },
    {
      title: 'Hero Adventures',
      content: 'Managing hero adventures and reading messages.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white">
      <Navbar />
      <div className="pt-20 container mx-auto px-4 py-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-100 text-center">Features</h1>
          <p className="text-xl mb-8 text-gray-200 text-center">
            Explore the powerful features of your Travian bot below:
          </p>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              content={feature.content}
              isOpen={openIndex === index}
              toggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
