import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '../types/product';

interface CompareContextType {
  items: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: number) => void;
  isInCompare: (productId: number) => boolean;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  const addToCompare = useCallback((product: Product) => {
    setItems(prev => {
      if (prev.length >= 4) {
        return prev;
      }
      if (!prev.find(item => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  }, []);

  const removeFromCompare = useCallback((productId: number) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const isInCompare = useCallback((productId: number) => {
    return items.some(item => item.id === productId);
  }, [items]);

  const clearCompare = useCallback(() => {
    setItems([]);
  }, []);

  return (
    <CompareContext.Provider value={{ items, addToCompare, removeFromCompare, isInCompare, clearCompare }}>
      {children}
    </CompareContext.Provider>
  );
}
