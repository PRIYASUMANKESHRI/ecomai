import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../../../types/product';
import ColorSelector from './ColorSelector';

interface BestSellerCardProps {
  product: Product;
}

export default function BestSellerCard({ product }: BestSellerCardProps) {
  return (
    <div className="group">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-500">{product.rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-900">₹{product.price}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
          )}
        </div>
        <ColorSelector productId={product.id} />
      </div>
    </div>
  );
}
