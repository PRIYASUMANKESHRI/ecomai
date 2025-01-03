import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => setPaymentMethod('card')}
          className={`flex-1 p-4 border rounded-lg ${
            paymentMethod === 'card' ? 'border-red-500 bg-red-50' : 'border-gray-200'
          }`}
        >
          <CreditCard className="w-6 h-6 mx-auto mb-2" />
          <div className="text-sm font-medium">Card</div>
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod('upi')}
          className={`flex-1 p-4 border rounded-lg ${
            paymentMethod === 'upi' ? 'border-red-500 bg-red-50' : 'border-gray-200'
          }`}
        >
          <div className="text-sm font-medium">UPI</div>
        </button>
      </div>

      {paymentMethod === 'card' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === 'upi' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">UPI ID</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            placeholder="username@upi"
          />
        </div>
      )}
    </div>
  );
}
