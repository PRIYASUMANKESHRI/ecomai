import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">Milton</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-black">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-black">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-black">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-black">FAQ</a>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-700">Features</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700">Testimonials</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700">Pricing</a>
            <a href="#faq" className="block px-3 py-2 text-gray-700">FAQ</a>
            <button className="w-full text-center bg-black text-white px-6 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
