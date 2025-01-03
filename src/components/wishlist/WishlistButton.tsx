import React from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../../hooks/useWishlist';

export default function WishlistButton({ productId }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(productId);

  return (
    <button
      onClick={() => toggleWishlist(productId)}
      className={`p-2 rounded-full ${
        inWishlist ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-400'
      }`}
    >
      <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
    </button>
  );
}
