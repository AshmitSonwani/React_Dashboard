// import React from 'react';

export default function SettingsTab() {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow rounded-lg">
      <div className="p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Dashboard Settings</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Default View</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>Overview</option>
              <option>User Analytics</option>
              <option>Real-time</option>
              <option>Performance</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Refresh Rate</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>30 seconds</option>
              <option>1 minute</option>
              <option>5 minutes</option>
              <option>15 minutes</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Notifications</label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                <span className="ml-2 text-sm text-gray-600">Daily summary</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                <span className="ml-2 text-sm text-gray-600">Alert notifications</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}