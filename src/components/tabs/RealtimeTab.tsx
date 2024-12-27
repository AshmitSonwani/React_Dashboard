// import React from 'react';
import ChartWidget from '../dashboard/widgets/ChartWidget';

export default function RealtimeTab() {
  return (
    <div className="space-y-6">
      <ChartWidget title="Live User Activity">
        <div className="h-96 flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">Real-time user activity map</p>
        </div>
      </ChartWidget>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartWidget title="Active Sessions">
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Current active sessions</p>
          </div>
        </ChartWidget>
        <ChartWidget title="Page Views">
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Real-time page views</p>
          </div>
        </ChartWidget>
        <ChartWidget title="Server Load">
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Current server metrics</p>
          </div>
        </ChartWidget>
      </div>
    </div>
  );
}