import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ProductGrid from '../components/ProductGrid';
import PlanetSaversPicks from '../components/PlanetSaversPicks';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  const electronics = products.filter(p => p.category === 'Electronics');
  const homeProducts = products.filter(p => p.category === 'Home & Kitchen');
  const topDeals = products.filter(p => p.discount && p.discount > 30);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Quick Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <img
              src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Electronics"
              className="w-full h-32 object-contain mb-3"
            />
            <h3 className="font-medium text-gray-900">Electronics</h3>
            <p className="text-sm text-gray-600">Up to 70% off</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <img
              src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Home"
              className="w-full h-32 object-contain mb-3"
            />
            <h3 className="font-medium text-gray-900">Home & Kitchen</h3>
            <p className="text-sm text-gray-600">Starting ₹199</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <img
              src="https://images.pexels.com/photos/6113657/pexels-photo-6113657.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Fashion"
              className="w-full h-32 object-contain mb-3"
            />
            <h3 className="font-medium text-gray-900">Fashion</h3>
            <p className="text-sm text-gray-600">Min. 50% off</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <img
              src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Sports"
              className="w-full h-32 object-contain mb-3"
            />
            <h3 className="font-medium text-gray-900">Sports & Outdoors</h3>
            <p className="text-sm text-gray-600">Under ₹999</p>
          </div>
        </div>

        {/* Planet Savers Picks */}
        <PlanetSaversPicks />

        {/* Top Deals */}
        <ProductGrid title="Top deals for you" products={topDeals} showLocaLeafFilter={true} />

        {/* Electronics */}
        <ProductGrid title="Electronics" products={electronics} showLocaLeafFilter={true} />

        {/* Home & Kitchen */}
        <ProductGrid title="Home & Kitchen essentials" products={homeProducts} showLocaLeafFilter={true} />
      </div>
    </div>
  );
};

export default HomePage;