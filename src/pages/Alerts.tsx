import React from 'react';
import { Clock, AlertTriangle, MapPin } from 'lucide-react';

export default function Alerts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Clock className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Real-time Alerts</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Active Alerts</h2>
              
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="font-semibold text-red-900">Severe Weather Warning</h3>
                  </div>
                  <p className="mt-2 text-sm text-red-700">Heavy rainfall expected in the next 2 hours. Reduced visibility and slippery roads likely.</p>
                  <div className="mt-2 flex items-center text-sm text-red-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Downtown Area</span>
                  </div>
                </div>

                <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-lg">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                    <h3 className="font-semibold text-yellow-900">Traffic Congestion</h3>
                  </div>
                  <p className="mt-2 text-sm text-yellow-700">Heavy traffic on Highway 101. Delays of up to 30 minutes expected.</p>
                  <div className="mt-2 flex items-center text-sm text-yellow-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>North Highway</span>
                  </div>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-900">Road Work</h3>
                  </div>
                  <p className="mt-2 text-sm text-blue-700">Maintenance work in progress. Single lane operation.</p>
                  <div className="mt-2 flex items-center text-sm text-blue-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>East Bridge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              
              <h2 className="text-xl font-semibold mb-4">Alert Settings</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Weather Alerts</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Traffic Updates</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Road Work Notices</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">Alert Radius</h3>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value="25"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1km</span>
                    <span>25km</span>
                    <span>50km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}