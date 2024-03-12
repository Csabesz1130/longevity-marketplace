import React, { useState } from 'react';

export const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button 
        className="flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition duration-200 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 bg-white shadow rounded-md overflow-hidden">
          {children}
        </div>
      )}
    </div>
  );
};
