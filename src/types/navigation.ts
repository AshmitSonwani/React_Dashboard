import { LucideIcon } from 'lucide-react';

export type TabId = 'overview' | 'users' | 'realtime' | 'performance' | 'settings' | 'help';

export interface NavItem {
  id: TabId;
  name: string;
  icon: LucideIcon;
}