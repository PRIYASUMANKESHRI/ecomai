import React from 'react';
import { Filter } from 'lucide-react';

interface FilterProps {
  onFilterChange: (filters: any) => void;
}

export default function ProductFilters({ onFilterChange }: FilterProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Filters</h3>
        <Filter className="w-5 h-5" />
      </div>
      
      <div>
        <h4 className="font-medium mb-2">Price Range</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-red-500" />
            <span className="ml-2">Under ₹500</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-red-500" />
            <span className="ml-2">₹500 - ₹1000</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-red-500" />
            <span className="ml-2">Above ₹1000</span>
          </label>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map(rating => (
            <label key={rating} className="flex items-center">
              <input type="checkbox" className="rounded text-red-500" />
              <span className="ml-2">{rating}+ Stars</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
