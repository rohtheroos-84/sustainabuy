import React, { useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { MapPin } from 'lucide-react';

interface ProductGridProps {
  title: string;
  products: Product[];
  showAll?: boolean;
  showLocaLeafFilter?: boolean;
  userLocation?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  title, 
  products, 
  showAll = false, 
  showLocaLeafFilter = false,
  userLocation = 'Chennai'
}) => {
  const [showLocaLeafOnly, setShowLocaLeafOnly] = useState(false);
  
  let filteredProducts = products;
  
  if (showLocaLeafOnly) {
    filteredProducts = products.filter(product => 
      product.isLocaLeaf && 
      (product.warehouseLocation === userLocation || product.sellerLocation === userLocation)
    );
  }
  
  const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {showLocaLeafFilter && (
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showLocaLeafOnly}
              onChange={(e) => setShowLocaLeafOnly(e.target.checked)}
              className="mr-2"
            />
            <MapPin className="w-4 h-4 mr-1 text-amber-600" />
            <span className="text-sm text-gray-700">Show LocaLeaf products only</span>
          </label>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} userLocation={userLocation} />
        ))}
      </div>
      
      {!showAll && filteredProducts.length > 8 && (
        <div className="mt-6 text-center">
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            See all products
          </button>
        </div>
      )}
      
      {showLocaLeafOnly && displayProducts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No LocaLeaf products found in your area.
        </div>
      )}
    </div>
  );
};

export default ProductGrid;