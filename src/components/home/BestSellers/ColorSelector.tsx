import React, { useState } from 'react';

const colors = [
  { id: 'red', value: '#EF4444' },
  { id: 'blue', value: '#3B82F6' },
  { id: 'green', value: '#10B981' },
  { id: 'black', value: '#1F2937' },
];

interface ColorSelectorProps {
  productId: number;
}

export default function ColorSelector({ productId }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0].id);

  return (
    <div className="flex items-center space-x-2">
      {colors.map((color) => (
        <button
          key={color.id}
          onClick={() => setSelectedColor(color.id)}
          className={`w-6 h-6 rounded-full border-2 ${
            selectedColor === color.id ? 'border-gray-900' : 'border-transparent'
          }`}
          style={{ backgroundColor: color.value }}
          aria-label={`Select ${color.id} color`}
        />
      ))}
    </div>
  );
}
