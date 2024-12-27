import React from 'react';
import { MoreVertical } from 'lucide-react';

interface ChartWidgetProps {
  title: string;
  children: React.ReactNode;
}

export default function ChartWidget({ title, children }: ChartWidgetProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <button className="text-gray-400 hover:text-gray-500">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}