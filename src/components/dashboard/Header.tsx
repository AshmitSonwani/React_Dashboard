// import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}