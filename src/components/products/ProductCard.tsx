import React from 'react';
    import { Star } from 'lucide-react';
    import { Product } from '../../types/product';
    import AddToCartButton from './AddToCartButton';

    interface ProductCardProps {
      product: Product;
    }

    export default function ProductCard({ product }: ProductCardProps) {
      return (
        <div className="group relative">
          {product.isSpecialOffer && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
              Special Offer
            </div>
          )}
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-500">{product.rating}</span>
            </div>
            <div className="mt-1 flex items-center">
              <span className="text-lg font-medium text-gray-900">₹{product.price}</span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <AddToCartButton product={product} />
          </div>
        </div>
      );
    }
