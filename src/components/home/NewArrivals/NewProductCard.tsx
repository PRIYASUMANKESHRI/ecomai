import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../../types/product';
import { useWishlist } from '../../../hooks/useWishlist';
import { useCart } from '../../../hooks/useCart';

interface NewProductCardProps {
  product: Product;
}

export default function NewProductCard({ product }: NewProductCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      quantity: 1,
      price: product.price
    });
  };

  return (
    <div className="group relative">
      <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-4 right-4">
          <button
            onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
            className={`p-2 rounded-full ${
              inWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-900'
            } shadow-md hover:scale-110 transition-transform`}
          >
            <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-lg font-medium text-white">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-300">₹{product.price}</p>
            </div>
            <button 
              onClick={handleAddToCart}
              className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -top-2 left-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
          New
        </span>
      </div>
    </div>
  );
}
