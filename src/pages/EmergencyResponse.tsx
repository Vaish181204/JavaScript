import React, { useState } from 'react';
import { Ambulance, MapPin } from 'lucide-react';

export default function EmergencyResponse() {
  const [location, setLocation] = useState('');
  const [severity, setSeverity] = useState('moderate');
  const [victims, setVictims] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle emergency response logic here
    console.log('Emergency response data:', { location, severity, victims });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Ambulance className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Emergency Response Optimization</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Report Emergency</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Incident Severity
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                >
                  <option value="minor">Minor</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Victims
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                  value={victims}
                  onChange={(e) => setVictims(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Request Emergency Response
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Nearby Facilities</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold">City General Hospital</h3>
                <p className="text-sm text-gray-600">2.5 km away - 8 min</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-green-600 text-sm">Available Beds: 12</span>
                  <button className="text-blue-600 hover:text-blue-800">Route</button>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold">Emergency Care Center</h3>
                <p className="text-sm text-gray-600">3.8 km away - 12 min</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-green-600 text-sm">Available Beds: 5</span>
                  <button className="text-blue-600 hover:text-blue-800">Route</button>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold">Trauma Center</h3>
                <p className="text-sm text-gray-600">5.2 km away - 15 min</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-yellow-600 text-sm">Available Beds: 2</span>
                  <button className="text-blue-600 hover:text-blue-800">Route</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}