// src/components/Collapsible.mjs
import React, { useState } from 'react';

export const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="flex items-center text-sm font-medium w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="mt-2">
          {children}
        </div>
      )}
    </div>
  );
};
