import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useDebounce } from '../../hooks/useDebounce';
import { searchProducts } from '../../utils/search';

export default function SearchAutocomplete() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      const results = searchProducts(debouncedQuery);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [debouncedQuery]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 rounded-full border"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>
      
      {suggestions.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg">
          {suggestions.map((product) => (
            <a
              key={product.id}
              href={`/product/${product.id}`}
              className="block px-4 py-2 hover:bg-gray-50"
            >
              <div className="font-medium">{product.name}</div>
              <div className="text-sm text-gray-500">{product.category}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
