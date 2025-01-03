import React from 'react';
import { useCart } from '../../hooks/useCart';

export default function OrderSummary() {
  const { cart } = useCart();
  const shipping = cart.total > 499 ? 0 : 50;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{cart.total}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>₹{cart.total + shipping}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
