import { useState, useCallback } from 'react';
import { CartItem, Cart } from '../types/cart';

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

  const addToCart = useCallback((item: CartItem) => {
    setCart(prev => {
      const existingItem = prev.items.find(i => i.productId === item.productId);
      if (existingItem) {
        return {
          items: prev.items.map(i => 
            i.productId === item.productId 
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
          total: prev.total + (item.price * item.quantity)
        };
      }
      return {
        items: [...prev.items, item],
        total: prev.total + (item.price * item.quantity)
      };
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart(prev => ({
      items: prev.items.filter(i => i.productId !== productId),
      total: prev.items.reduce((acc, item) => 
        item.productId !== productId ? acc + (item.price * item.quantity) : acc, 0
      )
    }));
  }, []);

  return { cart, addToCart, removeFromCart };
}
