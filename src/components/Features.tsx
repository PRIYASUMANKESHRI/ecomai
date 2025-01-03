import React from 'react';
import { Calendar, Clock, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Smart Calendar",
    description: "Seamlessly integrate your calendars and schedule meetings with AI assistance."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Time Tracking",
    description: "Track time spent on tasks and projects automatically with smart detection."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Share schedules, tasks, and collaborate with your team in real-time."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI Powered",
    description: "Let AI help you optimize your schedule and make better time management decisions."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to manage time better
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features to help you manage your time more effectively
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
