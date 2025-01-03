import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchProps {
  onSearch: (query: string) => void;
}

export default function ProductSearch({ onSearch }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
      />
      <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
    </form>
  );
}
