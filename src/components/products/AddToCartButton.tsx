import React from 'react';
    import { ShoppingCart } from 'lucide-react';
    import { useCart } from '../../hooks/useCart';
    import { Product } from '../../types/product';

    interface AddToCartButtonProps {
      product: Product;
    }

    export default function AddToCartButton({ product }: AddToCartButtonProps) {
      const { addToCart } = useCart();

      const handleAddToCart = () => {
        console.log('Adding to cart:', product);
        addToCart({ 
          productId: product.id, 
          quantity: 1, 
          price: product.price 
        });
      };

      return (
        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-red-500 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-red-600"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      );
    }
