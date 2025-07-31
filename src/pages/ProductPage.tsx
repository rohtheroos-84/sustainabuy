import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, Share2, Leaf, Truck, Shield, RotateCcw, MapPin } from 'lucide-react';
import { products } from '../data/products';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [ecoDelivery, setEcoDelivery] = useState(false);
  const userLocation = 'Chennai';

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  const images = product.images || [product.image];
  const isLocaLeaf = product.isLocaLeaf && 
    (product.warehouseLocation === userLocation || product.sellerLocation === userLocation);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <div className="mb-4">
                <img
                  src={images[selectedImage]}
                  alt={product.title}
                  className="w-full h-96 object-contain border border-gray-200 rounded-lg"
                />
              </div>
              {images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-16 border-2 rounded ${
                        selectedImage === index ? 'border-orange-400' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-1">
            {product.sponsored && (
              <div className="text-sm text-gray-500 mb-2">Sponsored</div>
            )}
            
            <h1 className="text-2xl font-medium text-gray-900 mb-4">{product.title}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.floor(product.rating)
                        ? 'text-orange-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-blue-600">
                {product.reviews.toLocaleString()} ratings
              </span>
            </div>

            {product.choice && (
              <div className="bg-orange-600 text-white px-3 py-1 rounded-sm text-sm inline-block mb-4">
                Amazon's Choice
              </div>
            )}

            {/* Sustainability Badges */}
            <div className="space-y-3 mb-6">
              {product.isSustainable && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center text-green-700 mb-2">
                    <Leaf className="w-5 h-5 mr-2" />
                    <span className="font-medium">Sustainable Choice</span>
                  </div>
                  <p className="text-sm text-green-600 mb-2">
                    This product meets our sustainability standards and helps reduce environmental impact.
                  </p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block">
                    Earn +{product.ecoLeaves} EcoLeaves with purchase
                  </div>
                </div>
              )}

              {isLocaLeaf && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-center text-amber-700 mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-medium">LocaLeaf — Minimizes logistics pollution</span>
                  </div>
                  <p className="text-sm text-amber-600 mb-2">
                    This product ships from a local warehouse or seller to reduce your carbon footprint.
                  </p>
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm inline-block">
                    Earn +3 EcoLeaves with LocaLeaf delivery
                  </div>
                </div>
              )}
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="text-3xl font-medium text-gray-900">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through ml-3">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {product.discount && (
                <div className="text-red-600 text-sm">
                  Save ₹{(product.originalPrice! - product.price).toLocaleString()} ({product.discount}% off)
                </div>
              )}
            </div>

            {/* LocaLeaf Delivery Info */}
            {isLocaLeaf && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                <div className="flex items-center text-amber-700 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-medium">
                    Eligible for LocaLeaf Delivery from {product.warehouseLocation || product.sellerLocation} warehouse
                  </span>
                </div>
              </div>
            )}

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-2">Key Features:</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-2">About this item</h3>
              <p className="text-sm text-gray-700">{product.description}</p>
            </div>

            {/* Actions */}
            <div className="flex space-x-3 mb-4">
              <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="w-5 h-5 mr-1" />
                Add to Wish List
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="w-5 h-5 mr-1" />
                Share
              </button>
            </div>
          </div>

          {/* Purchase Options */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
              <div className="text-2xl font-medium text-gray-900 mb-4">
                ₹{product.price.toLocaleString()}
              </div>

              {product.freeDelivery && (
                <div className="flex items-center text-sm text-gray-700 mb-2">
                  <Truck className="w-4 h-4 mr-2 text-blue-600" />
                  FREE delivery {product.deliveryDate}
                </div>
              )}

              {/* Eco Delivery Option */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ecoDelivery}
                    onChange={(e) => setEcoDelivery(e.target.checked)}
                    className="mr-3"
                  />
                  <div>
                    <div className="flex items-center text-sm font-medium text-green-700">
                      <Leaf className="w-4 h-4 mr-1" />
                      Choose Eco-Delivery (+10 EcoLeaves)
                    </div>
                    <div className="text-xs text-green-600">
                      Delivered in 3-4 days with carbon-neutral packaging
                    </div>
                  </div>
                </label>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity:
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 rounded px-3 py-1 text-sm"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-lg transition-colors">
                  Add to Cart
                </button>
                <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Buy Now
                </button>
              </div>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Secure transaction
                </div>
                <div className="flex items-center">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Easy returns
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  Ships from <span className="font-medium">Amazon</span>
                </div>
                <div className="text-sm text-gray-600">
                  Sold by <span className="font-medium">{product.brand}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;