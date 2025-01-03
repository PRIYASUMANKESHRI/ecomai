import React from 'react';
import { Package, Check, Truck, Home } from 'lucide-react';
import { useOrderStatus } from '../../hooks/useOrderStatus';
import TrackingTimeline from './TrackingTimeline';
import DeliveryDetails from './DeliveryDetails';

export default function OrderTracker() {
  const { order, status } = useOrderStatus();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Track Order #{order?.id}</h2>
      <TrackingTimeline status={status} />
      <DeliveryDetails order={order} />
    </div>
  );
}
