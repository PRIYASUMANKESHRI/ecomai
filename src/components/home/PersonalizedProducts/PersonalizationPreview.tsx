import React from 'react';

interface PersonalizationPreviewProps {
  text: string;
  font: string;
  color: string;
}

export default function PersonalizationPreview({ text, font, color }: PersonalizationPreviewProps) {
  return (
    <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80"
        alt="Bottle preview"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className="text-2xl font-bold"
          style={{
            fontFamily: font,
            color: color,
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          {text || 'Your Text Here'}
        </p>
      </div>
    </div>
  );
}
