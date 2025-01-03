import React from 'react';
import NewProductCard from './NewProductCard';
import { products } from '../../../data/products';
import { ArrowRight } from 'lucide-react';

export default function NewArrivalsSection() {
  const newArrivals = products.slice(0, 3); // Assuming first 3 products are new arrivals

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">New Arrivals</h2>
            <p className="mt-1 text-gray-600">Check out our latest products</p>
          </div>
          <button className="inline-flex items-center text-red-500 hover:text-red-600">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <NewProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
