import React from 'react';
import { Package, Check, Truck, Home } from 'lucide-react';

const steps = [
  { icon: Package, label: 'Order Placed' },
  { icon: Check, label: 'Confirmed' },
  { icon: Truck, label: 'Shipped' },
  { icon: Home, label: 'Delivered' }
];

export default function TrackingTimeline({ status }) {
  const currentStep = steps.findIndex(step => step.label.toLowerCase() === status);

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={step.label} className="relative flex items-center">
            <div className={`flex-1 text-right pr-4 ${index <= currentStep ? 'text-red-500' : 'text-gray-400'}`}>
              {step.label}
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index <= currentStep ? 'bg-red-500 text-white' : 'bg-gray-200'
            }`}>
              <step.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 pl-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
