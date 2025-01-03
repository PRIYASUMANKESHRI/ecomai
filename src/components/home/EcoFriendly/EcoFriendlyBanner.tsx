import React from 'react';
import { Leaf, TreePine } from 'lucide-react';

export default function EcoFriendlyBanner() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 to-green-500 p-8 md:p-12">
          <div className="absolute right-0 top-0 -mt-8 -mr-8">
            <TreePine className="w-64 h-64 text-green-400 opacity-20" />
          </div>
          
          <div className="relative">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-white" />
              <span className="text-white font-medium">Eco Initiative</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Plant a Tree with Every Order
            </h2>
            
            <p className="text-green-50 text-lg mb-8 max-w-2xl">
              For every order above ₹1499, we plant a tree in your name. Join us in making
              the world a greener place, one order at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-green-600 transition-colors">
                Learn More
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-medium rounded-full hover:bg-green-50 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
