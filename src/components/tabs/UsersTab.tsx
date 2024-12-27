// import React from 'react';
import ChartWidget from '../dashboard/widgets/ChartWidget';

export default function UsersTab() {
  return (
    <div className="space-y-6">
      <ChartWidget title="User Demographics">
        <div className="h-96 flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">User demographics visualization</p>
        </div>
      </ChartWidget>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartWidget title="User Growth">
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">User growth trends</p>
          </div>
        </ChartWidget>
        <ChartWidget title="User Retention">
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">User retention metrics</p>
          </div>
        </ChartWidget>
      </div>
    </div>
  );
}