import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import EcoPerksPage from './pages/EcoPerksPage';
import CheckoutPage from './pages/CheckoutPage';
import { User } from './types';

function App() {
  const [user] = useState<User>({
    name: 'User',
    ecoLeaves: 127,
    locaLeaves: 85,
    orders: 12,
    savedItems: 8,
    location: 'Chennai'
  });

  const [cartItems] = useState(3);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header ecoLeaves={user.ecoLeaves} locaLeaves={user.locaLeaves} cartItems={cartItems} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/eco-perks" element={<EcoPerksPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/eco-store" element={<HomePage />} />
            <Route path="/category/:category" element={<HomePage />} />
            <Route path="/cart" element={<CheckoutPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;