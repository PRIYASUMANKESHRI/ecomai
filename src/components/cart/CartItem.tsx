import React from 'react';
    import { Minus, Plus, Trash2 } from 'lucide-react';
    import { CartItem as CartItemType } from '../../types/cart';
    import { products } from '../../data/products';

    interface CartItemProps {
      item: CartItemType;
      onUpdateQuantity: (id: number, quantity: number) => void;
      onRemove: (id: number) => void;
    }

    export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
      const product = products.find(p => p.id === item.productId);
      if (!product) return null;

      return (
        <div className="flex items-center py-4 border-b">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-20 h-20 object-cover rounded"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="text-sm text-gray-500">₹{product.price}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
              className="p-1 rounded-full hover:bg-gray-100"
              disabled={item.quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onRemove(item.productId)}
              className="p-1 text-red-500 hover:bg-red-50 rounded-full ml-4"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      );
    }
