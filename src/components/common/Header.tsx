import React from 'react';
import { Search, ShoppingCart, User, Package } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  return (
    <>
      <div className="bg-red-500 text-white text-center py-2">
        Free Shipping Above Rs. 499
      </div>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-gray-100 rounded-full py-2 px-4 pl-10"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a href="/account" className="flex items-center text-gray-700">
                <User className="w-5 h-5 mr-1" />
                <span>Account</span>
              </a>
              <a href="/cart" className="flex items-center text-gray-700">
                <ShoppingCart className="w-5 h-5 mr-1" />
                <span>Cart</span>
              </a>
              <a href="/track" className="flex items-center text-gray-700">
                <Package className="w-5 h-5 mr-1" />
                <span>Track Order</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
