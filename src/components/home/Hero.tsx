import React from 'react';

export default function Hero() {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000"
        alt="Kitchen Essentials"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Kitchen Essentials</h1>
          <p className="text-xl mb-8">Discover our premium range of kitchen products</p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
