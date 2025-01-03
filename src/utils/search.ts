import { Product } from '../types/product';
import { products } from '../data/products';

export function searchProducts(query: string): Product[] {
  const normalizedQuery = query.toLowerCase();
  
  return products.filter(product => 
    product.name.toLowerCase().includes(normalizedQuery) ||
    product.category.toLowerCase().includes(normalizedQuery) ||
    product.description.toLowerCase().includes(normalizedQuery)
  );
}
