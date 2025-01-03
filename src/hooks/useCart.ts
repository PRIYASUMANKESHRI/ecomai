import { useState, useCallback, useEffect } from 'react';
    import { CartItem, Cart } from '../types/cart';

    const CART_STORAGE_KEY = 'ecomai_cart';

    export function useCart() {
      const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

      useEffect(() => {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (storedCart) {
          try {
            setCart(JSON.parse(storedCart));
          } catch (error) {
            console.error("Error parsing cart from local storage:", error);
            localStorage.removeItem(CART_STORAGE_KEY);
          }
        }
      }, []);

      useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        console.log("Cart updated in local storage:", cart);
      }, [cart]);

      const calculateTotal = (items: CartItem[]) => {
        return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      };

      const addToCart = useCallback((item: CartItem) => {
        setCart(prev => {
          console.log('Current cart before add:', prev);
          const existingItem = prev.items.find(i => i.productId === item.productId);
          let updatedItems;
          if (existingItem) {
            updatedItems = prev.items.map(i => 
              i.productId === item.productId 
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            );
          } else {
            updatedItems = [...prev.items, item];
          }
          const updatedTotal = calculateTotal(updatedItems);
          const updatedCart = { items: updatedItems, total: updatedTotal };
          console.log('Updated cart after add:', updatedCart);
          return updatedCart;
        });
      }, [calculateTotal]);

      const removeFromCart = useCallback((productId: number) => {
        setCart(prev => {
          const updatedItems = prev.items.filter(i => i.productId !== productId);
          const updatedTotal = calculateTotal(updatedItems);
           const updatedCart = { items: updatedItems, total: updatedTotal };
          console.log('Updated cart after remove:', updatedCart);
          return updatedCart;
        });
      }, [calculateTotal]);

      const updateQuantity = useCallback((productId: number, quantity: number) => {
        setCart(prev => {
          const updatedItems = prev.items.map(item =>
            item.productId === productId ? { ...item, quantity } : item
          );
          const updatedTotal = calculateTotal(updatedItems);
          const updatedCart = { items: updatedItems, total: updatedTotal };
          console.log('Updated cart after quantity update:', updatedCart);
          return updatedCart;
        });
      }, [calculateTotal]);

      const clearCart = useCallback(() => {
        setCart({ items: [], total: 0 });
        console.log('Cart cleared');
      }, []);

      return { cart, addToCart, removeFromCart, clearCart, updateQuantity };
    }
