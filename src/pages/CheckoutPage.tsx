import React, { useState } from 'react';
import { MapPin, Truck, CreditCard, Package, Leaf, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [ecoDelivery, setEcoDelivery] = useState(false);
  const [boxBackReturn, setBoxBackReturn] = useState(false);
  const [ecoLeavesRedeem, setEcoLeavesRedeem] = useState(0);
  const [locaLeavesRedeem, setLocaLeavesRedeem] = useState(0);
  const userEcoLeaves = 127;
  const userLocaLeaves = 85;
  const maxEcoRedeemable = Math.floor(userEcoLeaves / 50) * 50;
  const maxLocaRedeemable = Math.floor(userLocaLeaves / 25) * 25;

  const cartItems = [
    {
      id: '1',
      title: 'Bamboo Fiber Dinner Set - 16 Piece Eco-Friendly Tableware',
      price: 2499,
      quantity: 1,
      image: 'https://images.pexels.com/photos/6113657/pexels-photo-6113657.jpeg?auto=compress&cs=tinysrgb&w=200',
      isSustainable: true,
      ecoLeaves: 5,
      isLocaLeaf: true
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = ecoLeavesRedeem + locaLeavesRedeem;
  const total = subtotal - discount;
  const totalEcoLeaves = cartItems.reduce((sum, item) => {
    let leaves = (item.isSustainable ? item.ecoLeaves : 0);
    if (ecoDelivery) leaves += 10;
    if (boxBackReturn) leaves += 5;
    return sum + leaves;
  }, 0);
  const totalLocaLeaves = cartItems.reduce((sum, item) => {
    let leaves = (item.isLocaLeaf ? 3 : 0);
    return sum + leaves;
  }, 0);

  const steps = [
    { id: 1, title: 'Address', icon: MapPin },
    { id: 2, title: 'Delivery', icon: Truck },
    { id: 3, title: 'Payment', icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/cart" className="flex items-center text-blue-600 hover:text-blue-800 mr-4">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Cart
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                currentStep >= step.id 
                  ? 'bg-orange-400 border-orange-400 text-white' 
                  : 'bg-white border-gray-300 text-gray-500'
              }`}>
                <step.icon className="w-5 h-5" />
              </div>
              <span className={`ml-2 text-sm font-medium ${
                currentStep >= step.id ? 'text-orange-600' : 'text-gray-500'
              }`}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-4 ${
                  currentStep > step.id ? 'bg-orange-400' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Address</h2>
                <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-600 mt-1">
                        123 Anna Salai, T. Nagar<br />
                        Chennai, Tamil Nadu 600017<br />
                        Phone: +91 98765 43210
                      </div>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Default</span>
                  </div>
                </div>
                <button 
                  onClick={() => setCurrentStep(2)}
                  className="mt-4 bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Use this address
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Delivery Option</h2>
                
                {/* Standard Delivery */}
                <div className="border border-gray-200 rounded-lg p-4 mb-4">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="radio"
                      name="delivery"
                      checked={!ecoDelivery}
                      onChange={() => setEcoDelivery(false)}
                      className="mt-1 mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <Truck className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="font-medium">Standard Delivery</span>
                        <span className="ml-2 text-green-600 font-medium">FREE</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Get it by Tomorrow, Nov 15
                      </div>
                    </div>
                  </label>
                </div>

                {/* Eco Delivery */}
                <div className="border border-green-200 rounded-lg p-4 mb-6 bg-green-50">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="radio"
                      name="delivery"
                      checked={ecoDelivery}
                      onChange={() => setEcoDelivery(true)}
                      className="mt-1 mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <Leaf className="w-4 h-4 mr-2 text-green-600" />
                        <span className="font-medium text-green-700">Eco-Delivery</span>
                        <span className="ml-2 text-green-600 font-medium">FREE</span>
                        <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          +10 EcoLeaves
                        </span>
                      </div>
                      <div className="text-sm text-green-600 mt-1">
                        Get it by Thu, Nov 17 • Carbon-neutral packaging
                      </div>
                    </div>
                  </label>
                </div>

                {/* BoxBack Return Option */}
                <div className="border border-amber-200 rounded-lg p-4 mb-6 bg-amber-50">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={boxBackReturn}
                      onChange={(e) => setBoxBackReturn(e.target.checked)}
                      className="mt-1 mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <Package className="w-4 h-4 mr-2 text-amber-600" />
                        <span className="font-medium text-amber-700">
                          I will return my previous Amazon box(es) with this delivery
                        </span>
                        <span className="ml-2 bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">
                          +5 EcoLeaves
                        </span>
                      </div>
                      <div className="text-sm text-amber-600 mt-1">
                        Returning your packaging helps us recycle and reduce waste.
                      </div>
                    </div>
                  </label>
                </div>

                <button 
                  onClick={() => setCurrentStep(3)}
                  className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {currentStep === 3 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>
                
                {/* EcoLeaves Redemption */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Leaf className="w-5 h-5 mr-2 text-green-600" />
                      <span className="font-medium text-green-700">Redeem EcoLeaves</span>
                    </div>
                    <span className="text-sm text-green-600">
                      Available: {userEcoLeaves} leaves
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="ecoRedeem"
                        checked={ecoLeavesRedeem === 0}
                        onChange={() => setEcoLeavesRedeem(0)}
                        className="mr-2"
                      />
                      <span className="text-sm">Don't redeem</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="ecoRedeem"
                        checked={ecoLeavesRedeem === 50}
                        onChange={() => setEcoLeavesRedeem(50)}
                        className="mr-2"
                        disabled={userEcoLeaves < 50}
                      />
                      <span className="text-sm">₹50 off (50 leaves)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="ecoRedeem"
                        checked={ecoLeavesRedeem === 100}
                        onChange={() => setEcoLeavesRedeem(100)}
                        className="mr-2"
                        disabled={userEcoLeaves < 100}
                      />
                      <span className="text-sm">₹100 off (100 leaves)</span>
                    </label>
                  </div>
                </div>

                {/* LocaLeaves Redemption */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                      <span className="font-medium text-amber-700">Redeem LocaLeaves</span>
                    </div>
                    <span className="text-sm text-amber-600">
                      Available: {userLocaLeaves} leaves
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="locaRedeem"
                        checked={locaLeavesRedeem === 0}
                        onChange={() => setLocaLeavesRedeem(0)}
                        className="mr-2"
                      />
                      <span className="text-sm">Don't redeem</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="locaRedeem"
                        checked={locaLeavesRedeem === 25}
                        onChange={() => setLocaLeavesRedeem(25)}
                        className="mr-2"
                        disabled={userLocaLeaves < 25}
                      />
                      <span className="text-sm">₹25 off (25 leaves)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="locaRedeem"
                        checked={locaLeavesRedeem === 50}
                        onChange={() => setLocaLeavesRedeem(50)}
                        className="mr-2"
                        disabled={userLocaLeaves < 50}
                      />
                      <span className="text-sm">₹50 off (50 leaves)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="locaRedeem"
                        checked={locaLeavesRedeem === 75}
                        onChange={() => setLocaLeavesRedeem(75)}
                        className="mr-2"
                        disabled={userLocaLeaves < 75}
                      />
                      <span className="text-sm">₹75 off (75 leaves)</span>
                    </label>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="payment" defaultChecked className="mr-3" />
                      <CreditCard className="w-4 h-4 mr-2" />
                      <span>Credit/Debit Card</span>
                    </label>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="payment" className="mr-3" />
                      <span>UPI</span>
                    </label>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="payment" className="mr-3" />
                      <span>Cash on Delivery</span>
                    </label>
                  </div>
                </div>

                <button className="mt-6 w-full bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Place Order
                </button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain border border-gray-200 rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                      <div className="text-sm font-medium text-gray-900">
                        ₹{item.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rewards Summary */}
              <div className="space-y-3 mb-4">
                {/* EcoLeaves Summary */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-700 font-medium">EcoLeaves to earn:</span>
                    <span className="text-green-700 font-bold">+{totalEcoLeaves}</span>
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    {cartItems.some(item => item.isSustainable) && '• Sustainable products'}
                    {ecoDelivery && ' • Eco-delivery'}
                    {boxBackReturn && ' • BoxBack return'}
                  </div>
                </div>

                {/* LocaLeaves Summary */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-amber-700 font-medium">LocaLeaves to earn:</span>
                    <span className="text-amber-700 font-bold">+{totalLocaLeaves}</span>
                  </div>
                  <div className="text-xs text-amber-600 mt-1">
                    {cartItems.some(item => item.isLocaLeaf) && '• LocaLeaf delivery'}
                  </div>
                </div>
              </div>

              {/* BoxBack Reminder */}
              {boxBackReturn && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center text-amber-700 text-sm">
                    <Package className="w-4 h-4 mr-2" />
                    <span className="font-medium">BoxBack return noted</span>
                  </div>
                  <div className="text-xs text-amber-600 mt-1">
                    Make sure to return packaging at delivery!
                  </div>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span className="text-green-600">FREE</span>
                </div>
                {ecoLeavesRedeem > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>EcoLeaves discount:</span>
                    <span>-₹{ecoLeavesRedeem}</span>
                  </div>
                )}
                {locaLeavesRedeem > 0 && (
                  <div className="flex justify-between text-amber-600">
                    <span>LocaLeaves discount:</span>
                    <span>-₹{locaLeavesRedeem}</span>
                  </div>
                )}
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;