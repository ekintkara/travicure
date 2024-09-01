import { useState } from "react";
import Navbar from "@/components/Navbar"; // Import Navbar
import { Card } from "@/components/ui/card";

// FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white">
      <Navbar />
      <div className="flex flex-col items-center px-4 py-16 md:py-24">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-6 text-center">Frequently Asked Questions</h1>
          <p className="text-lg mb-12 text-center">
            Below are some frequently asked questions about our Travian bot:
          </p>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <Card key={index} className="bg-white bg-opacity-10 text-gray-100 p-6 rounded-lg shadow-lg">
                <button
                  className="w-full text-left flex items-center justify-between"
                  onClick={() => toggleItem(index)}
                >
                  <h2 className="text-2xl font-semibold">{item.question}</h2>
                  <svg
                    className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="mt-4">
                    <p>{item.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Data for the FAQ section
const faqData = [
  {
    question: '1. What is the Travian bot?',
    answer: 'The Travian bot is a software that automates various tasks in the Travian strategy game. It automates processes such as resource collection, construction, and military operations.'
  },
  {
    question: '2. What are the main features of the bot?',
    answer: (
      <>
        The main features of the bot are:
        <ul className="list-disc list-inside mt-2">
          <li>Resource Management and Construction</li>
          <li>Military Training</li>
          <li>Festival Organization</li>
          <li>Attack Management</li>
          <li>Notifications</li>
          <li>Defense Management</li>
          <li>Resource Transfer and Trade</li>
          <li>Farming and Attack Planning</li>
          <li>Online Status Tracking</li>
          <li>Hero Adventures</li>
        </ul>
      </>
    )
  },
  {
    question: '3. How do I use the Travian bot?',
    answer: 'To start using the Travian bot, you need to download and install the application and configure the necessary settings. You can follow the user guide to learn how to use it step by step.'
  },
  {
    question: '4. Is the bot paid?',
    answer: 'The bot may have different subscription plans. For more information on prices, you can visit the official website.'
  },
  {
    question: '5. Is the Travian bot secure?',
    answer: 'The Travian bot implements various security measures to protect user data. It is also regularly updated to ensure compliance with game rules and maintain security.'
  }
];

export default FAQ;
