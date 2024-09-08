import { useState } from "react";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white">
      <div className="flex flex-col items-center px-4 py-16 md:py-24">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-100">Frequently Asked Questions</h1>
          <p className="text-lg mb-12 text-center text-gray-300">
            Below are some common questions about our Travian bot. If you have more queries, feel free to contact our support team.
          </p>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <Card key={index} className="bg-[rgba(90,91,105,0.32)] p-6 rounded-lg shadow-lg text-gray-100">
                <button
                  className="w-full text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleItem(index)}
                >
                  <h2 className="text-2xl font-semibold">{item.question}</h2>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="mt-4 transition-opacity duration-300">
                    <p className="text-gray-200">{item.answer}</p>
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
    answer: 'The Travian bot automates key processes in the Travian strategy game, such as resource management, construction, and military operations. It’s designed to help you save time and improve efficiency.'
  },
  {
    question: '2. What features does the bot offer?',
    answer: (
      <>
        The bot includes features like:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Automated Resource Management</li>
          <li>Smart Building Automation</li>
          <li>Troop Training</li>
          <li>Event Scheduling (Festivals)</li>
          <li>Attack and Defense Management</li>
          <li>Real-time Notifications</li>
          <li>Resource Transfer and Trading Automation</li>
          <li>Strategic Farming and Attack Planning</li>
          <li>Online Status Monitoring</li>
          <li>Hero Adventure Management</li>
        </ul>
      </>
    )
  },
  {
    question: '3. How do I install and use the bot?',
    answer: 'To get started, simply download the bot from our website and follow the installation instructions. Once installed, configure your settings through the intuitive dashboard to automate various tasks in your game.'
  },
  {
    question: '4. Are there subscription plans for the bot?',
    answer: 'Yes, we offer different subscription plans. Check out our pricing section for details on the Basic, Standard, and Premium plans that suit different needs and budgets.'
  },
  {
    question: '5. Is the Travian bot secure?',
    answer: 'We prioritize your safety. The bot is regularly updated to comply with the latest game rules, and we implement strong data protection measures to ensure your information remains secure.'
  }
];

export default FAQ;
