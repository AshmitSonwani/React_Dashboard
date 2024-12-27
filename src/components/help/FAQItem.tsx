// import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b last:border-b-0 pb-4">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left group"
      >
        <span className="text-gray-800 font-medium group-hover:text-indigo-600">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-indigo-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}