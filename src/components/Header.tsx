import React, { useState } from 'react';
import { MapPin, Search, Globe, User, ShoppingCart, Menu, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  ecoLeaves: number;
  locaLeaves: number;
  cartItems: number;
}

const Header: React.FC<HeaderProps> = ({ ecoLeaves, locaLeaves, cartItems }) => {
  const [showEcoTooltip, setShowEcoTooltip] = useState(false);
  const [showLocaTooltip, setShowLocaTooltip] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-gray-800 py-1 px-2 text-xs text-center">
        <span>🌱 Go Green with EcoLeaves & LocaLeaves - Earn rewards for sustainable choices!</span>
      </div>
      
      {/* Main Header */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-white text-black px-2 py-1 rounded text-xl font-bold mr-2">
              amazon
            </div>
            <span className="text-orange-400 text-xs">.in</span>
          </Link>

          {/* Location */}
          <div className="flex items-center text-sm ml-4">
            <MapPin className="w-4 h-4 mr-1" />
            <div>
              <div className="text-xs text-gray-300">Deliver to</div>
              <div className="font-bold">Chennai 600005</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-4 max-w-2xl">
            <div className="flex bg-white rounded overflow-hidden">
              <select className="bg-gray-100 text-black px-3 py-2 text-sm border-r">
                <option>All</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home</option>
              </select>
              <input
                type="text"
                placeholder="Search Amazon.in"
                className="flex-1 px-3 py-2 text-black outline-none"
              />
              <button className="bg-orange-400 hover:bg-orange-500 px-4 py-2 transition-colors">
                <Search className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            {/* Language */}
            <div className="flex items-center text-sm">
              <img src="https://flagcdn.com/24x18/in.png" alt="India" className="mr-1" />
              <span>EN</span>
            </div>

            {/* EcoLeaves Badge */}
            <div 
              className="relative flex items-center bg-green-700 hover:bg-green-600 px-3 py-1 rounded-full cursor-pointer transition-colors"
              onMouseEnter={() => setShowEcoTooltip(true)}
              onMouseLeave={() => setShowEcoTooltip(false)}
            >
              <Leaf className="w-4 h-4 mr-1 text-green-300" />
              <span className="text-sm font-medium">{ecoLeaves}</span>
              
              {showEcoTooltip && (
                <div className="absolute top-full right-0 mt-2 bg-black text-white p-3 rounded-lg shadow-lg z-50 w-64">
                  <div className="text-sm">
                    <div className="font-bold text-green-400 mb-1">EcoLeaves Balance: {ecoLeaves}</div>
                    <div className="text-xs text-gray-300">
                      • Earn leaves by choosing sustainable products<br/>
                      • Get bonus leaves for eco-delivery options<br/>
                      • Redeem for discounts and eco-rewards
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* LocaLeaves Badge */}
            <div 
              className="relative flex items-center bg-amber-700 hover:bg-amber-600 px-3 py-1 rounded-full cursor-pointer transition-colors"
              onMouseEnter={() => setShowLocaTooltip(true)}
              onMouseLeave={() => setShowLocaTooltip(false)}
            >
              <MapPin className="w-4 h-4 mr-1 text-amber-300" />
              <span className="text-sm font-medium">{locaLeaves}</span>
              
              {showLocaTooltip && (
                <div className="absolute top-full right-0 mt-2 bg-black text-white p-3 rounded-lg shadow-lg z-50 w-64">
                  <div className="text-sm">
                    <div className="font-bold text-amber-400 mb-1">LocaLeaves Balance: {locaLeaves}</div>
                    <div className="text-xs text-gray-300">
                      • Earn leaves by choosing local products<br/>
                      • Support local businesses and reduce emissions<br/>
                      • Redeem for local store vouchers and rewards
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Account */}
            <div className="text-sm">
              <div className="text-xs">Hello, User</div>
              <div className="font-bold">Account & Lists</div>
            </div>

            {/* Orders */}
            <div className="text-sm">
              <div className="text-xs">Returns</div>
              <div className="font-bold">& Orders</div>
            </div>

            {/* Cart */}
            <Link to="/cart" className="flex items-center relative">
              <ShoppingCart className="w-6 h-6" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-400 text-black rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                  {cartItems}
                </span>
              )}
              <span className="ml-1 font-bold">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-700 px-4 py-2">
        <div className="flex items-center max-w-7xl mx-auto space-x-6">
          <div className="flex items-center">
            <Menu className="w-4 h-4 mr-2" />
            <span className="text-sm font-bold">All</span>
          </div>
          <nav className="flex space-x-6 text-sm">
            <Link to="/category/electronics" className="hover:text-orange-400 transition-colors">Electronics</Link>
            <Link to="/category/fashion" className="hover:text-orange-400 transition-colors">Fashion</Link>
            <Link to="/category/home" className="hover:text-orange-400 transition-colors">Home & Kitchen</Link>
            <Link to="/category/beauty" className="hover:text-orange-400 transition-colors">Beauty</Link>
            <Link to="/eco-store" className="hover:text-green-400 transition-colors flex items-center">
              <Leaf className="w-3 h-3 mr-1" />
              Planet Savers
            </Link>
            <Link to="/eco-perks" className="hover:text-green-400 transition-colors">EcoPerks Zone</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;