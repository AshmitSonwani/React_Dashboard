// import React from 'react';
import ChartWidget from '../dashboard/widgets/ChartWidget';

export default function PerformanceTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartWidget title="Response Times">
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">API response times</p>
          </div>
        </ChartWidget>
        <ChartWidget title="Error Rates">
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">System error rates</p>
          </div>
        </ChartWidget>
      </div>
      
      <ChartWidget title="Resource Usage">
        <div className="h-96 flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">CPU, Memory, and Network usage</p>
        </div>
      </ChartWidget>
    </div>
  );
}