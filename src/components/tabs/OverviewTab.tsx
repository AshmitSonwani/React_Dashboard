// import React from 'react';
import KPICard from '../dashboard/widgets/KPICard';
import ChartWidget from '../dashboard/widgets/ChartWidget';
import { Users, Clock, TrendingUp, BarChart2 } from 'lucide-react';

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Active Users"
          value="2,543"
          change={12.5}
          changeLabel="vs last week"
          icon={<Users className="w-6 h-6 text-indigo-600" />}
        />
        <KPICard
          title="Avg. Session"
          value="4m 32s"
          change={-2.3}
          changeLabel="vs last week"
          icon={<Clock className="w-6 h-6 text-indigo-600" />}
        />
        <KPICard
          title="Bounce Rate"
          value="32.1%"
          change={-4.5}
          changeLabel="vs last week"
          icon={<TrendingUp className="w-6 h-6 text-indigo-600" />}
        />
        <KPICard
          title="Conversion"
          value="3.8%"
          change={1.2}
          changeLabel="vs last week"
          icon={<BarChart2 className="w-6 h-6 text-indigo-600" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartWidget title="User Engagement">
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Chart placeholder - User Engagement over time</p>
          </div>
        </ChartWidget>
        <ChartWidget title="Traffic Sources">
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Chart placeholder - Traffic Sources breakdown</p>
          </div>
        </ChartWidget>
      </div>
    </div>
  );
}