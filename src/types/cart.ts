export interface CartItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
