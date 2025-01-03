import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Milton Thermosteel Flask",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80",
    category: "Water Bottles & Flasks",
    description: "Premium grade stainless steel flask with 24-hour temperature retention",
    rating: 4.5,
    isSpecialOffer: true
  },
  {
    id: 2,
    name: "Milton Storage Container Set",
    price: 899,
    image: "https://images.unsplash.com/photo-1584736286279-4c76c381f563?auto=format&fit=crop&q=80",
    category: "Storage Containers & Jars",
    description: "Set of 3 airtight storage containers",
    rating: 4.8
  }
  // Add more products as needed
];
