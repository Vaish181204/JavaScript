import React from 'react';
import { AlertTriangle, BarChart3 } from 'lucide-react';

export default function RiskAnalysis() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <AlertTriangle className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Risk Factor Analysis</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Current Risk Factors</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Weather Impact</span>
                  <span className="text-red-600">High Risk</span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Traffic Density</span>
                  <span className="text-yellow-600">Medium Risk</span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Road Conditions</span>
                  <span className="text-green-600">Low Risk</span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Historical Data</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Accident Frequency
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  15% increase in accidents during peak hours (4PM - 7PM)
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold">Common Risk Patterns</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>• Heavy rainfall increases risk by 45%</li>
                  <li>• Night driving accidents up by 30%</li>
                  <li>• Weekend incidents higher by 25%</li>
                </ul>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold">Safety Recommendations</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>• Reduce speed during wet conditions</li>
                  <li>• Maintain safe following distance</li>
                  <li>• Use alternative routes during peak hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}