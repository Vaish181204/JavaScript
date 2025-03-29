import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  Ambulance,
  BarChart3,
  Brain,
  Clock,
  Download,
  MapPin,
  Shield,
  ThermometerSun,
  Timer
} from 'lucide-react';

function FeatureCard({ icon: Icon, title, description, path }: {
  icon: React.ElementType,
  title: string,
  description: string,
  path: string
}) {
  return (
    <Link to={path} className="block">
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Road Accident Survival Analysis & Prediction
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Leverage AI-powered insights to predict, prevent, and respond to road accidents effectively.
              Save lives through data-driven decision making.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
              <Download className="w-5 h-5" />
              Download Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="Accident Severity Prediction"
            description="Advanced ML algorithms predict survival probabilities based on comprehensive accident data analysis."
            path="/prediction"
          />
          <FeatureCard
            icon={Ambulance}
            title="Emergency Response Optimization"
            description="Real-time routing and hospital selection to minimize response time and maximize survival chances."
            path="/emergency"
          />
          <FeatureCard
            icon={AlertTriangle}
            title="Risk Factor Analysis"
            description="Deep analysis of environmental, vehicular, and human factors contributing to accidents."
            path="/risk-analysis"
          />
          <FeatureCard
            icon={Clock}
            title="Real-time Alerts"
            description="Instant notifications about high-risk zones and dangerous weather conditions."
            path="/alerts"
          />
          <FeatureCard
            icon={BarChart3}
            title="Interactive Reports"
            description="Comprehensive visualization of accident patterns and survival statistics."
            path="/reports"
          />
          <FeatureCard
            icon={Shield}
            title="Preventive Insights"
            description="Data-driven recommendations to improve road safety and reduce accidents."
            path="/prevention"
          />
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Timer className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p>Prediction Accuracy</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p>Cities Covered</p>
            </div>
            <div className="text-center">
              <ThermometerSun className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p>Real-time Monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2025 Road Accident Survival Analysis & Prediction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}