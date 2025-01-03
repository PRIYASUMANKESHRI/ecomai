import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import AddressBook from './AddressBook';
import OrderHistory from './OrderHistory';

export default function UserProfile() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <OrderHistory />
        </div>
        <div>
          <AddressBook />
        </div>
      </div>
    </div>
  );
}
