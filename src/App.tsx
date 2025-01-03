import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import PromotionalBanner from './components/home/PromotionalBanner';
import CategoryGrid from './components/home/CategoryGrid';
import BestSellersSection from './components/home/BestSellers/BestSellersSection';
import PersonalizedSection from './components/home/PersonalizedProducts/PersonalizedSection';
import EcoFriendlyBanner from './components/home/EcoFriendly/EcoFriendlyBanner';
import NewArrivalsSection from './components/home/NewArrivals/NewArrivalsSection';
import FeaturedProducts from './components/products/FeaturedProducts';
import SpecialOffers from './components/products/SpecialOffers';
import { WishlistProvider } from './context/WishlistContext';
import { CompareProvider } from './context/CompareContext';

function App() {
  return (
    <WishlistProvider>
      <CompareProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <PromotionalBanner />
          <CategoryGrid />
          <BestSellersSection />
          <PersonalizedSection />
          <EcoFriendlyBanner />
          <NewArrivalsSection />
          <FeaturedProducts />
          <SpecialOffers />
          <Footer />
        </div>
      </CompareProvider>
    </WishlistProvider>
  );
}

export default App;
