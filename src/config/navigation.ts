import { LayoutDashboard, Users, Activity, BarChart2, Settings, HelpCircle } from 'lucide-react';
import { NavItem } from '../types/navigation';

export const navigation: NavItem[] = [
  { id: 'overview', name: 'Overview', icon: LayoutDashboard },
  { id: 'users', name: 'User Analytics', icon: Users },
  { id: 'realtime', name: 'Real-time', icon: Activity },
  { id: 'performance', name: 'Performance', icon: BarChart2 },
  { id: 'settings', name: 'Settings', icon: Settings },
  { id: 'help', name: 'Help', icon: HelpCircle },
];