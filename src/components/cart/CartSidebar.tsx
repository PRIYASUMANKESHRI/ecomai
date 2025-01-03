import React, { useEffect } from 'react';
    import { X } from 'lucide-react';
    import CartItem from './CartItem';
    import { useCart } from '../../hooks/useCart';

    interface CartSidebarProps {
      isOpen: boolean;
      onClose: () => void;
    }

    export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
      const { cart, removeFromCart, updateQuantity } = useCart();

      useEffect(() => {
        console.log("CartSidebar rendered with cart:", cart);
      }, [cart]);

      if (!isOpen) return null;

      return (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-medium">Shopping Cart</h2>
              <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100vh-200px)]">
              {cart.items.map(item => (
                <CartItem 
                  key={item.productId}
                  item={item}
                  onUpdateQuantity={(id, qty) => updateQuantity(id, qty)}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-medium">₹{cart.total}</span>
              </div>
              <button 
                className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600"
                onClick={() => {/* Implement checkout */}}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      );
    }
