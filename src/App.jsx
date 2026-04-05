import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Checkout from './pages/Checkout';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home cartCount={cartCount} />} />
        <Route path="/products" element={<Shop cartCount={cartCount} />} />
        <Route path="/products/:id" element={<ProductDetail cartCount={cartCount} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartCount={cartCount} />} />
        <Route path="/checkout" element={<Checkout cartCount={cartCount} />} />
        <Route path="/about" element={<About cartCount={cartCount} />} />
        <Route path="/faq" element={<FAQ cartCount={cartCount} />} />
        <Route path="/contact" element={<Contact cartCount={cartCount} />} />
        
        {/* Mandatory Legal Pages */}
        <Route path="/shipping" element={<Policy title="Shipping Policy" content="Complimentary insured shipping on orders over $150. Global transit available. Standard dispatch window is 48 hours for hand-poured batches." />} />
        <Route path="/returns" element={<Policy title="Returns Policy" content="Returns accepted within 14 days on fully intact, sealed boxes only. Every full-sized bottle comes with a 2ml sample vial. Try the sample first." />} />
        <Route path="/privacy" element={<Policy title="Privacy Policy" content="Your data remains in the vault. We process transactions via end-to-end encryption and exclusively use your coordinates for delivery." />} />
        <Route path="/terms" element={<Policy title="Terms & Conditions" content="By accessing AETHER, you agree to our standard operating procedures. All formulations remain proprietary intellectual property." />} />
        
        <Route path="*" element={<Home cartCount={cartCount} />} />
      </Routes>
    </Router>
  );
}

export default App;
