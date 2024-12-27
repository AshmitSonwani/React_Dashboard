// import React from 'react';
import { Menu, X } from 'lucide-react';
import { TabId } from '../../types/navigation';
import { navigation } from '../../config/navigation';

interface MobileNavProps {
  isOpen: boolean;
  currentTab: TabId;
  onToggle: () => void;
  onTabChange: (tab: TabId) => void;
}

export default function MobileNav({ isOpen, currentTab, onToggle, onTabChange }: MobileNavProps) {
  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
      </button>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-25" onClick={onToggle}>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg" onClick={e => e.stopPropagation()}>
            <div className="h-full flex flex-col">
              <div className="flex-shrink-0 px-4 py-4 flex items-center justify-between">
                <span className="text-xl font-semibold">Analytics</span>
                <button
                  onClick={onToggle}
                  className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onTabChange(item.id);
                        onToggle();
                      }}
                      className={`group flex items-center px-2 py-2 text-base font-medium rounded-md w-full ${
                        currentTab === item.id
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon
                        className={`mr-4 h-6 w-6 ${
                          currentTab === item.id ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-500'
                        }`}
                      />
                      {item.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}