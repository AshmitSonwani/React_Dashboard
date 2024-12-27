import { useState } from 'react';
import { Bell, Settings, User } from 'lucide-react';
import MobileNav from './MobileNav';
import ThemeToggle from '../theme/ThemeToggle';
import { TabId } from '../../types/navigation';

interface NavbarProps {
  currentTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function Navbar({ currentTab, onTabChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <MobileNav
              isOpen={isMobileMenuOpen}
              currentTab={currentTab}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onTabChange={onTabChange}
            />
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Asmit Analytics</h1>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <span className="sr-only">Settings</span>
              <Settings className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <span className="sr-only">User profile</span>
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}