import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contactus from './pages/Contactus';
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prev) => [...prev, product]);
  }

  function removeFromCart(indexToRemove) {
    setCartItems((prev) => prev.filter((item, index) => index !== indexToRemove));
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;