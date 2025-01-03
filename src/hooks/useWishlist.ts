import { useState, useCallback } from 'react';
import { Product } from '../types/product';

export function useWishlist() {
  const [items, setItems] = useState<Product[]>([]);

  const addToWishlist = useCallback((product: Product) => {
    setItems(prev => {
      if (!prev.find(item => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  }, []);

  const removeFromWishlist = useCallback((productId: number) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const isInWishlist = useCallback((productId: number) => {
    return items.some(item => item.id === productId);
  }, [items]);

  return { items, addToWishlist, removeFromWishlist, isInWishlist };
}
