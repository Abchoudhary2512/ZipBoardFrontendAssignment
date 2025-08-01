import React, { useState } from 'react';
import { Moon, Sun, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  // Add more FAQs if needed
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.',
  }
];

export default function FAQComponent() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen p-4 transition-colors duration-300`}>      
      <div className="flex justify-between items-center max-w-4xl mx-auto mb-6">
        <h1 className="text-2xl font-semibold">Frequently asked questions</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="max-w-4xl mx-auto divide-y divide-gray-300 dark:divide-gray-700">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>Q{index + 1}. {faq.question}</span>
              {expandedIndex === index ? <Minus /> : <Plus />}
            </button>
            {expandedIndex === index && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
