import React, { useState, useEffect, useRef } from 'react';
    import {
      Menu,
      X,
      ChevronDown,
      Search,
      User,
      ShoppingCart,
      Package,
      Heart,
      List,
      Sliders,
      Star,
      Filter,
    } from 'lucide-react';
    import { useCart } from '../../hooks/useCart';
    import { useWishlist } from '../../hooks/useWishlist';
    import { products } from '../../data/products';
    import { Product } from '../../types/product';

    const categories = [
      {
        name: 'Bottles & Flasks',
        link: '#',
        submenu: [
          { name: 'Vacuum Thermosteel Bottles', link: '#' },
          { name: 'Stainless Steel Bottles', link: '#' },
          { name: 'Copper Bottles', link: '#' },
          { name: 'Personalised Bottles', link: '#' },
          { name: 'Glass Bottles', link: '#' },
          { name: 'Insulated Flasks & Bottles', link: '#' },
          { name: 'PET & PP Bottles', link: '#' },
          { name: 'Kids Bottles', link: '#' },
          { name: 'Smart Bottles', link: '#' },
          { name: 'Ice Packs & Pails', link: '#' },
        ],
      },
      {
        name: 'Tableware',
        link: '#',
        submenu: [],
      },
      {
        name: 'Lunchboxes',
        link: '#',
        submenu: [],
      },
      {
        name: 'Casseroles',
        link: '#',
        submenu: [],
      },
      {
        name: 'Cookware',
        link: '#',
        submenu: [],
      },
      {
        name: 'Storage',
        link: '#',
        submenu: [],
      },
      {
        name: 'Home Essentials',
        link: '#',
        submenu: [],
      },
      {
        name: 'Electric Appliances',
        link: '#',
        submenu: [],
      },
      {
        name: 'Wedding Gifts',
        link: '#',
        submenu: [],
      },
    ];

    export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false);
      const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
      const [searchQuery, setSearchQuery] = useState('');
      const [showFilters, setShowFilters] = useState(false);
      const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
      const [suggestions, setSuggestions] = useState<Product[]>([]);
      const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
      const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
      const [selectedRating, setSelectedRating] = useState<number | null>(null);
      const { cart } = useCart();
      const { items: wishlistItems } = useWishlist();
      const searchBarRef = useRef<HTMLDivElement>(null);

      const cartItemCount = cart.items.length;
      const wishlistItemCount = wishlistItems.length;

      const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.length > 2) {
          const filtered = products.filter(
            (product) =>
              product.name.toLowerCase().includes(query.toLowerCase()) ||
              product.category.toLowerCase().includes(query.toLowerCase())
          );
          setSuggestions(filtered);
        } else {
          setSuggestions([]);
        }
      };

      const handleFilterChange = () => {
        const filtered = products.filter((product) => {
          const categoryMatch = selectedCategory
            ? product.category === selectedCategory
            : true;
          const priceMatch =
            product.price >= priceRange[0] && product.price <= priceRange[1];
          const ratingMatch = selectedRating
            ? product.rating >= selectedRating
            : true;
          return categoryMatch && priceMatch && ratingMatch;
        });
        setFilteredProducts(filtered);
      };

      useEffect(() => {
        handleFilterChange();
      }, [selectedCategory, priceRange, selectedRating]);

      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            searchBarRef.current &&
            !searchBarRef.current.contains(event.target as Node)
          ) {
            setSuggestions([]);
          }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

      return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm">
          {/* Top Banner */}
          <div className="bg-red-500 text-white text-center py-2">
            <p>COD Payment Option Available</p>
          </div>

          {/* Top Navigation Bar */}
          <div className="bg-gray-100 py-2 px-4">
            <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6">
              <a
                href="/track"
                className="flex items-center text-gray-700 hover:text-red-500"
              >
                <Package className="w-4 h-4 mr-1" />
                <span>Track Order</span>
              </a>
              <a
                href="/wishlist"
                className="flex items-center text-gray-700 hover:text-red-500"
              >
                <Heart className="w-4 h-4 mr-1" />
                <span>Wishlist</span>
              </a>
              <a
                href="/login"
                className="flex items-center text-gray-700 hover:text-red-500"
              >
                <User className="w-4 h-4 mr-1" />
                <span>Login/Signup</span>
              </a>
            </div>
          </div>

          {/* Main Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block lg:hidden p-2 rounded-md text-gray-700"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center">
                  <span className="text-2xl font-bold text-red-500">PAVISHA</span>
                </a>
              </div>

              {/* Search Bar */}
              <div className="hidden lg:flex flex-1 max-w-xl mx-8" ref={searchBarRef}>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md py-2.5 px-4 pl-10 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                  <button
                    className="absolute right-0 top-0 h-full px-4 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="w-5 h-5" />
                  </button>
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />

                  {/* Search Suggestions */}
                  {suggestions.length > 0 && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                      {suggestions.map((product) => (
                        <a
                          key={product.id}
                          href={`/product/${product.id}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-50"
                        >
                          {product.name}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Filter Options */}
                  {showFilters && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg p-4 space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Category</h4>
                        <select
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                          <option value="">All Categories</option>
                          {categories.map((category) => (
                            <option key={category.name} value={category.name}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Price Range</h4>
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            min="0"
                            max="1000"
                            value={priceRange[0]}
                            onChange={(e) =>
                              setPriceRange([parseInt(e.target.value), priceRange[1]])
                            }
                            className="w-24 border border-gray-300 rounded-md px-3 py-2"
                          />
                          <span>-</span>
                          <input
                            type="number"
                            min="0"
                            max="1000"
                            value={priceRange[1]}
                            onChange={(e) =>
                              setPriceRange([priceRange[0], parseInt(e.target.value)])
                            }
                            className="w-24 border border-gray-300 rounded-md px-3 py-2"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Rating</h4>
                        <div className="flex items-center space-x-2">
                          {[4, 3, 2, 1].map((rating) => (
                            <button
                              key={rating}
                              onClick={() => setSelectedRating(rating)}
                              className={`flex items-center px-3 py-1 rounded-md ${
                                selectedRating === rating
                                  ? 'bg-red-500 text-white'
                                  : 'bg-gray-200 text-gray-700'
                              }`}
                            >
                              <Star className="w-4 h-4 mr-1" />
                              <span>{rating}+</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setShowFilters(false);
                          handleFilterChange();
                        }}
                        className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                      >
                        Apply Filters
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a
                  href="/account"
                  className="flex items-center text-gray-700 hover:text-red-500"
                >
                  <User className="w-5 h-5 mr-2" />
                  <span>Account</span>
                </a>
                <a
                  href="/cart"
                  className="flex items-center text-gray-700 hover:text-red-500"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  <span>Cart ({cartItemCount})</span>
                </a>
                <a
                  href="/wishlist"
                  className="flex items-center text-gray-700 hover:text-red-500"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  <span>Wishlist ({wishlistItemCount})</span>
                </a>
                <a
                  href="/compare"
                  className="flex items-center text-gray-700 hover:text-red-500"
                >
                  <List className="w-5 h-5 mr-2" />
                  <span>Compare</span>
                </a>
              </div>
            </div>

            {/* Categories Navigation */}
            <div className="hidden lg:block border-t border-gray-200">
              <div className="flex justify-between py-4">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(category.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-red-500 py-2">
                      {category.name}
                      {category.submenu.length > 0 && (
                        <ChevronDown className="ml-1 w-4 h-4" />
                      )}
                    </button>

                    {category.submenu.length > 0 && (
                      <div
                        className={`absolute left-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-opacity duration-150 ${
                          activeDropdown === category.name
                            ? 'opacity-100 visible'
                            : 'opacity-0 invisible'
                        }`}
                        onMouseEnter={() => setActiveDropdown(category.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-2">
                          {category.submenu.map((item) => (
                            <a
                              key={item.name}
                              href={item.link}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute w-full bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {categories.map((category) => (
                  <div key={category.name}>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === category.name ? null : category.name
                        )
                      }
                      className="w-full flex items-center justify-between px-3 py-2 text-gray-700"
                    >
                      {category.name}
                      {category.submenu.length > 0 && (
                        <ChevronDown
                          className={`w-4 h-4 transform transition-transform ${
                            activeDropdown === category.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>
                    {category.submenu.length > 0 &&
                      activeDropdown === category.name && (
                        <div className="pl-4 space-y-1 bg-gray-50">
                          {category.submenu.map((item) => (
                            <a
                              key={item.name}
                              href={item.link}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-red-500"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="px-4 space-y-3">
                  <a
                    href="/account"
                    className="flex items-center text-gray-700 hover:text-red-500"
                  >
                    <User className="w-5 h-5 mr-2" />
                    <span>Account</span>
                  </a>
                  <a
                    href="/cart"
                    className="flex items-center text-gray-700 hover:text-red-500"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    <span>Cart ({cartItemCount})</span>
                  </a>
                  <a
                    href="/wishlist"
                    className="flex items-center text-gray-700 hover:text-red-500"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    <span>Wishlist ({wishlistItemCount})</span>
                  </a>
                  <a
                    href="/compare"
                    className="flex items-center text-gray-700 hover:text-red-500"
                  >
                    <List className="w-5 h-5 mr-2" />
                    <span>Compare</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      );
    }
