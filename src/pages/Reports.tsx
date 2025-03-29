import React from 'react';
import { BarChart3, TrendingUp, PieChart } from 'lucide-react';

export default function Reports() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Interactive Reports</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Accident Trends</h2>
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
              
              <div className="h-64 flex items-center justify-center border border-gray-200 rounded-lg">
                <TrendingUp className="w-12 h-12 text-gray-400" />
                <span className="ml-2 text-gray-500">Trend Chart Placeholder</span>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-sm text-blue-600 mb-1">Total Incidents</div>
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-xs text-blue-500">↑ 12% from last month</div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-sm text-green-600 mb-1">Response Rate</div>
                  <div className="text-2xl font-bold">95.8%</div>
                  <div className="text-xs text-green-500">↑ 3% from last month</div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-sm text-purple-600 mb-1">Avg Response Time</div>
                  <div className="text-2xl font-bold">8.5 min</div>
                  <div className="text-xs text-purple-500">↓ 1.2 min improvement</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Incident Distribution</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">By Severity</h3>
                  <div className="h-48 flex items-center justify-center border border-gray-200 rounded-lg">
                    <PieChart className="w-12 h-12 text-gray-400" />
                    <span className="ml-2 text-gray-500">Pie Chart Placeholder</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">By Time of Day</h3>
                  <div className="h-48 flex items-center justify-center border border-gray-200 rounded-lg">
                    <BarChart3 className="w-12 h-12 text-gray-400" />
                    <span className="ml-2 text-gray-500">Bar Chart Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Key Findings</h2>
              
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-gray-800">Peak Hours</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Most incidents occur between 4PM - 7PM during weekdays
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-gray-800">Weather Impact</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    45% increase in incidents during rainy conditions
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-gray-800">Response Efficiency</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    20% improvement in response times since last quarter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}