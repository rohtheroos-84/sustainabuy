import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to top */}
      <div className="bg-gray-700 py-4 text-center hover:bg-gray-600 cursor-pointer transition-colors">
        <span className="text-sm">Back to top</span>
      </div>

      {/* Main footer content */}
      <div className="px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Press Releases</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Amazon Science</a></li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h3 className="font-bold mb-4">Connect with Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Instagram</a></li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="font-bold mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sell on Amazon</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Amazon Global Selling</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Become an Affiliate</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Fulfilment by Amazon</a></li>
            </ul>
          </div>

          {/* EcoLeaves & Sustainability */}
          <div>
            <h3 className="font-bold mb-4 flex items-center">
              <Leaf className="w-4 h-4 mr-2 text-green-400" />
              EcoLeaves & Sustainability
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">How EcoLeaves Works</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Sustainability Report</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Climate Pledge</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Sustainable Products</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white text-black px-3 py-1 rounded text-xl font-bold mr-2">
                amazon
              </div>
              <span className="text-orange-400">.in</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <select className="bg-gray-700 text-white px-3 py-1 rounded border border-gray-600">
                <option>English</option>
                <option>हिन्दी</option>
                <option>தமிழ்</option>
              </select>
              
              <div className="flex items-center">
                <img src="https://flagcdn.com/24x18/in.png" alt="India" className="mr-2" />
                <span>India</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-700 text-xs text-gray-400 text-center">
            <p>&copy; 2024 Amazon.com, Inc. or its affiliates</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white">Conditions & Terms of Use</a>
              <a href="#" className="hover:text-white">Privacy Notice</a>
              <a href="#" className="hover:text-white">Your Ads Privacy Choices</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;