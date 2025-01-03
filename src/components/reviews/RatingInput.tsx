import React from 'react';
import { Star } from 'lucide-react';

export default function RatingInput({ value, onChange }) {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          key={rating}
          type="button"
          onClick={() => onChange(rating)}
          className={`p-1 ${rating <= value ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          <Star className="w-6 h-6 fill-current" />
        </button>
      ))}
    </div>
  );
}
