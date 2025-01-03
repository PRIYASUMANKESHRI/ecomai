import React, { useState } from 'react';
import PersonalizationPreview from './PersonalizationPreview';

const fonts = ['Arial', 'Times New Roman', 'Courier New', 'Georgia'];
const colors = ['#000000', '#FF0000', '#0000FF', '#FFD700'];

export default function PersonalizedSection() {
  const [text, setText] = useState('');
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Personalize Your Bottle</h2>
          <p className="mt-2 text-gray-600">Create a unique design that's truly yours</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <PersonalizationPreview
            text={text}
            font={selectedFont}
            color={selectedColor}
          />
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Text
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your text"
                maxLength={20}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Font
              </label>
              <div className="grid grid-cols-2 gap-2">
                {fonts.map((font) => (
                  <button
                    key={font}
                    onClick={() => setSelectedFont(font)}
                    className={`p-2 text-sm border rounded-md ${
                      selectedFont === font ? 'border-red-500 bg-red-50' : ''
                    }`}
                    style={{ fontFamily: font }}
                  >
                    {font}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Color
              </label>
              <div className="flex space-x-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-gray-900' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <button className="w-full bg-red-500 text-white py-3 px-4 rounded-full hover:bg-red-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
