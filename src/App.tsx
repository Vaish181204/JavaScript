import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  AlertTriangle,
  Ambulance,
  BarChart3,
  Brain,
  Clock,
  Download,
  MapPin,
  Menu,
  Shield,
  ThermometerSun,
  Timer,
  X
} from 'lucide-react';
import Home from './pages/Home';
import PredictionPage from './pages/PredictionPage';
import EmergencyResponse from './pages/EmergencyResponse';
import RiskAnalysis from './pages/RiskAnalysis';
import Alerts from './pages/Alerts';
import Reports from './pages/Reports';
import Prevention from './pages/Prevention';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Prediction', path: '/prediction', icon: Brain },
    { name: 'Emergency Response', path: '/emergency', icon: Ambulance },
    { name: 'Risk Analysis', path: '/risk-analysis', icon: AlertTriangle },
    { name: 'Real-time Alerts', path: '/alerts', icon: Clock },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Prevention', path: '/prevention', icon: Shield },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-blue-600" />
              <span className="ml-2 font-bold text-xl text-gray-800">RASAP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === item.path
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<PredictionPage />} />
          <Route path="/emergency" element={<EmergencyResponse />} />
          <Route path="/risk-analysis" element={<RiskAnalysis />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/prevention" element={<Prevention />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;