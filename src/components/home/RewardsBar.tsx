import React from 'react';

export default function RewardsBar() {
  return (
    <div className="bg-red-500 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-2">
          <span className="font-semibold">Milton Rewards</span>
          <span>|</span>
          <span>🎁</span>
          <span>Get upto 5% Off using POPcoins</span>
          <span className="text-2xl">→</span>
        </div>
      </div>
    </div>
  );
}
