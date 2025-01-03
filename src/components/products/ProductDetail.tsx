import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../../types/product';
import AddToCartButton from './AddToCartButton';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="flex items-center mt-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-2 text-gray-600">{product.rating} Rating</span>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="ml-4 text-lg text-gray-500 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <p className="mt-6 text-gray-600">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
