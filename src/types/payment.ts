export interface PaymentMethod {
  id: string;
  type: 'card' | 'upi' | 'netbanking';
  last4?: string;
  brand?: string;
}

export interface PaymentIntent {
  id: string;
  amount: number;
  status: 'pending' | 'succeeded' | 'failed';
  paymentMethod: PaymentMethod;
}
