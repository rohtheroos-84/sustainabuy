import React from 'react';
import { Star, Leaf, MapPin } from 'lucide-react';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  userLocation?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, userLocation = 'Chennai' }) => {
  const isLocaLeaf = product.isLocaLeaf && 
    (product.warehouseLocation === userLocation || product.sellerLocation === userLocation);

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 h-full">
        {/* Sponsored/Choice Badge */}
        {product.sponsored && (
          <div className="text-xs text-gray-500 mb-2">Sponsored</div>
        )}
        {product.choice && (
          <div className="bg-orange-600 text-white text-xs px-2 py-1 rounded-sm mb-2 inline-block">
            Amazon's Choice
          </div>
        )}

        {/* Product Image */}
        <div className="relative mb-3">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mix-blend-multiply"
          />
          <div className="absolute top-2 left-2 space-y-1">
            {product.isSustainable && (
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex items-center">
                <Leaf className="w-3 h-3 mr-1" />
                Sustainable Choice
              </div>
            )}
            {isLocaLeaf && (
              <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs flex items-center group relative">
                <MapPin className="w-3 h-3 mr-1" />
                LocaLeaf
                <div className="absolute left-0 top-full mt-2 bg-black text-white p-2 rounded text-xs w-48 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                  This product ships from a local warehouse or seller to reduce your carbon footprint.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Title */}
        <h3 className="text-sm text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3 h-3 ${
                  star <= Math.floor(product.rating)
                    ? 'text-orange-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 ml-1">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="mb-2">
          <div className="flex items-center">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
            {product.discount && (
              <span className="text-sm text-green-600 ml-2">
                ({product.discount}% off)
              </span>
            )}
          </div>
        </div>

        {/* EcoLeaves Badges */}
        <div className="space-y-1 mb-2">
          {product.isSustainable && product.ecoLeaves && (
            <div className="bg-green-50 border border-green-200 rounded p-2">
              <div className="flex items-center text-green-700 text-xs">
                <Leaf className="w-3 h-3 mr-1" />
                <span className="font-medium">+{product.ecoLeaves} EcoLeaves</span>
              </div>
            </div>
          )}
          {isLocaLeaf && (
            <div className="bg-amber-50 border border-amber-200 rounded p-2">
              <div className="flex items-center text-amber-700 text-xs">
                <MapPin className="w-3 h-3 mr-1" />
                <span className="font-medium">+3 EcoLeaves (LocaLeaf)</span>
              </div>
            </div>
          )}
        </div>

        {/* Delivery Info */}
        {product.freeDelivery && (
          <div className="text-xs text-gray-600 mb-1">
            FREE delivery {product.deliveryDate}
          </div>
        )}

        {/* LocaLeaf Delivery Info */}
        {isLocaLeaf && (
          <div className="text-xs text-amber-600 mb-1">
            Eligible for LocaLeaf Delivery from {product.warehouseLocation || product.sellerLocation} warehouse
          </div>
        )}

        {/* Brand */}
        <div className="text-xs text-gray-500">
          by {product.brand}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;