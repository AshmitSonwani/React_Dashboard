import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  change: number;
  changeLabel: string;
  icon: React.ReactNode;
}

export default function KPICard({ title, value, change, changeLabel, icon }: KPICardProps) {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 bg-indigo-50 rounded-lg">
            {icon}
          </div>
          <h3 className="ml-3 text-lg font-medium text-gray-900">{title}</h3>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <div className={`ml-2 flex items-baseline text-sm ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {isPositive ? (
              <ArrowUpRight className="w-4 h-4" />
            ) : (
              <ArrowDownRight className="w-4 h-4" />
            )}
            <span className="ml-1">{Math.abs(change)}%</span>
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-500">{changeLabel}</p>
      </div>
    </div>
  );
}