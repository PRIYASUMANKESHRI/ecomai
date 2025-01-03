import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            A more natural way to
            <span className="text-purple-600"> manage time</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Milton is your new home base for all things time management. 
            Stop context switching between calendar apps, task managers, and notes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 flex items-center justify-center">
              Get Started <ArrowRight className="ml-2" />
            </button>
            <button className="border border-gray-300 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50">
              See how it works
            </button>
          </div>
        </div>
        <div className="mt-16">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            alt="Calendar Dashboard"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </div>
    </div>
  );
}
