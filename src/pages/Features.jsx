import React, { useState } from 'react';

const FeatureItem = ({ title, content, isOpen, toggle }) => {
  return (
    <div className="bg-[rgba(90,91,105,0.32)] p-6 rounded-lg shadow-lg">
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
        <div className="mt-4">
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
      content: 'Take control of your village’s infrastructure. Efficiently construct and upgrade buildings while managing resource fields to ensure optimal growth and production.',
    },
    {
      title: 'Troop Training',
      content: "Train a formidable army to protect your village and conquer others. Utilize the blacksmith's workshop to enhance their combat skills and capabilities.",
    },
    {
      title: 'Festivals',
      content: 'Keep your villagers happy by automatically organizing grand festivals to boost morale and culture.',
    },
    {
      title: 'Attack Management',
      content: 'React swiftly to incoming attacks by withdrawing troops and securing your resources. Ensure you’re always one step ahead of your enemies.',
    },
    {
      title: 'Notifications',
      content: 'Stay informed with real-time notifications about incoming attacks, completed tasks, or other important game events.',
    },
    {
      title: 'Defense Management',
      content: 'Strategically plan your defenses to protect your village from enemy raids. Fortify your stronghold and be ready for any assault.',
    },
    {
      title: 'Resource Transfer and Trade',
      content: 'Easily transfer resources between your villages and engage in automatic NPC trading to maximize your economic efficiency.',
    },
    {
      title: 'Farming and Attack Planning',
      content: 'Strategically plan farming raids and military attacks. Coordinate troop movements and send waves of attacks to overwhelm your opponents.',
    },
    {
      title: 'Online Status Detection',
      content: 'Monitor the online status of multihunters and enemy players to plan your moves accordingly and avoid unnecessary confrontations.',
    },
    {
      title: 'Hero Adventures',
      content: 'Send your hero on thrilling adventures and manage their progress. Read important game messages to stay on top of in-game developments.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white">
      <div className="pt-16 container mx-auto px-4 py-16">
        <div className="text-center mb-16 mt-12">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-100">Features</h1>
          <p className="text-xl mb-8 text-gray-200">
            Explore the powerful features of your Travian bot below:
          </p>
        </div>
        <div className="space-y-4">
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
