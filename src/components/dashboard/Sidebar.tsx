// import React from 'react';
import { navigation } from '../../config/navigation';
import { TabId } from '../../types/navigation';
import { LayoutDashboard } from 'lucide-react';

interface SidebarProps {
  currentTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function Sidebar({ currentTab, onTabChange }: SidebarProps) {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto 
          bg-white dark:bg-gray-900 
          border-r border-gray-200 dark:border-gray-800 
          transition-colors duration-200">
          <div className="flex items-center flex-shrink-0 px-4">
            <LayoutDashboard className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
              Analytics
            </span>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full transition-colors duration-200 ${
                    currentTab === item.id
                      ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon
                    className={`mr-3 h-6 w-6 transition-colors duration-200 ${
                      currentTab === item.id 
                        ? 'text-indigo-600 dark:text-indigo-400' 
                        : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-300'
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
  );
}