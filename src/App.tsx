import { useState } from 'react';
import Sidebar from './components/dashboard/Sidebar';
import Navbar from './components/navigation/Navbar';
import { TabId } from './types/navigation';
import OverviewTab from './components/tabs/OverviewTab';
import UsersTab from './components/tabs/UsersTab';
import RealtimeTab from './components/tabs/RealtimeTab';
import PerformanceTab from './components/tabs/PerformanceTab';
import SettingsTab from './components/tabs/SettingsTab';
import HelpTab from './components/tabs/HelpTab';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabId>('overview');
  useTheme(); // Initialize theme

  const renderTabContent = () => {
    switch (currentTab) {
      case 'overview':
        return <OverviewTab />;
      case 'users':
        return <UsersTab />;
      case 'realtime':
        return <RealtimeTab />;
      case 'performance':
        return <PerformanceTab />;
      case 'settings':
        return <SettingsTab />;
      case 'help':
        return <HelpTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar currentTab={currentTab} onTabChange={setCurrentTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar currentTab={currentTab} onTabChange={setCurrentTab} />
        <main className="flex-1 overflow-y-auto p-4">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}