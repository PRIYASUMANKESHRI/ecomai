import React from 'react';
import { products } from '../../data/products';
import ProductCard from './ProductCard';

export default function SpecialOffers() {
  const specialOffers = products.filter(p => p.isSpecialOffer);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Special Offers</h2>
          <p className="mt-2 text-gray-600">Limited time deals on premium products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
