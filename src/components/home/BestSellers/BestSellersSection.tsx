import React from 'react';
import BestSellerCard from './BestSellerCard';
import { products } from '../../../data/products';

export default function BestSellersSection() {
  const bestSellers = products.slice(0, 4); // Assuming first 4 products are best sellers

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {bestSellers.map((product) => (
            <BestSellerCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
