import React from 'react';
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const PlanetSaversPicks: React.FC = () => {
  const sustainableProducts = products.filter(p => p.isSustainable);

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg shadow-sm border border-green-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Leaf className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Planet Savers Picks</h2>
          <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Earn Extra EcoLeaves
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-white hover:bg-gray-100 shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-white hover:bg-gray-100 shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sustainableProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
          Explore All Sustainable Products
        </button>
      </div>
    </div>
  );
};

export default PlanetSaversPicks;