import React from 'react';
import { Shield, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function Prevention() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Shield className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Preventive Insights</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Safety Score</h2>
            
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    Your Score
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    85%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: "85%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center text-green-600">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span>Consistent speed maintenance</span>
              </div>
              <div className="flex items-center text-green-600">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span>Good following distance</span>
              </div>
              <div className="flex items-center text-yellow-600">
                <AlertTriangle className="w-5 h-5 mr-2" />
                <span>Occasional hard braking</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Personalized Recommendations</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-800">Route Planning</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Consider alternative routes during peak hours (4PM - 7PM)
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-800">Weather Adaptation</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Reduce speed by 20% during wet conditions
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-800">Vehicle Maintenance</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Schedule brake inspection within next 500km
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Safety Tips</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Daily Checks</h3>
                  <ul className="text-sm text-blue-600 space-y-2">
                    <li>• Check tire pressure</li>
                    <li>• Test all lights</li>
                    <li>• Check fluid levels</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">Good Habits</h3>
                  <ul className="text-sm text-green-600 space-y-2">
                    <li>• Maintain safe distance</li>
                    <li>• Use turn signals</li>
                    <li>• Check mirrors regularly</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-medium text-purple-800 mb-2">Weather Tips</h3>
                  <ul className="text-sm text-purple-600 space-y-2">
                    <li>• Slow down in rain</li>
                    <li>• Increase following distance</li>
                    <li>• Use appropriate lights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}