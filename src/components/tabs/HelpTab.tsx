import { useState } from 'react';
import { Book, MessageCircle, Mail } from 'lucide-react';
import FAQItem from '../help/FAQItem';
import { faqData } from '../../data/faqData';

export default function HelpTab() {
  const [openFAQs, setOpenFAQs] = useState<string[]>([]);

  const toggleFAQ = (id: string) => {
    setOpenFAQs(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Help Center</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg hover:border-indigo-500 transition-colors cursor-pointer hover:shadow-md">
            <Book className="w-6 h-6 text-indigo-600 mb-3" />
            <h3 className="font-medium mb-2">Documentation</h3>
            <p className="text-sm text-gray-600">Browse our comprehensive guides and documentation</p>
          </div>
          
          <div className="p-4 border rounded-lg hover:border-indigo-500 transition-colors cursor-pointer hover:shadow-md">
            <MessageCircle className="w-6 h-6 text-indigo-600 mb-3" />
            <h3 className="font-medium mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600">Chat with our support team in real-time</p>
          </div>
          
          <div className="p-4 border rounded-lg hover:border-indigo-500 transition-colors cursor-pointer hover:shadow-md">
            <Mail className="w-6 h-6 text-indigo-600 mb-3" />
            <h3 className="font-medium mb-2">Email Support</h3>
            <p className="text-sm text-gray-600">Send us an email and we'll respond within 24 hours</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQs.includes(faq.id)}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}