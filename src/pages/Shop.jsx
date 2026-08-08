import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ProductCard from '../components/ProductCard';
import '../style/Shop.css';
import shop1 from '../assets/shop1.jpeg';
import shop2 from '../assets/shop2.jpeg';
import shop3 from '../assets/shop3.jpeg';
import shop4 from '../assets/shop4.jpeg';
import shop5 from '../assets/shop5.jpeg';
import shop6 from '../assets/shop6.jpeg';
import shop7 from '../assets/shop7.jpeg';
import shop8 from '../assets/shop8.jpeg';
import shop9 from '../assets/shop9.jpeg';
import shop10 from '../assets/shop10.jpeg';
import shop11 from '../assets/shop11.jpeg';
import shop12 from '../assets/shop12.jpeg';
import background1 from '../assets/background1.png';

function Shop({ addToCart }) {
  return (
    <div className="shop">
      
      <div className="box">
        <div className="pshop">
        <h2>Our Products</h2>
        <p><i>Explore our wide range of premium devices and accessories</i></p>
        </div>
        <div className="cardshop">
          <ProductCard image={shop1} name="Laptop" price="135"  addToCart={addToCart}/>
          <ProductCard image={shop2} name="Headphones" price="30"  addToCart={addToCart}/>
          <ProductCard image={shop3} name="Smartwatch" price="100"  addToCart={addToCart}/>
          <ProductCard image={shop4} name="earphones" price="135"  addToCart={addToCart}/>
          <ProductCard image={shop5} name="phone" price="38" addToCart={addToCart} />
          <ProductCard image={shop6} name="drone" price="10"  addToCart={addToCart}/>
          <ProductCard image={shop7} name="screen" price="13"  addToCart={addToCart}/>
          <ProductCard image={shop8} name="speaker" price="90"  addToCart={addToCart}/>
          <ProductCard image={shop9} name="camera" price="200"  addToCart={addToCart}/>
          <ProductCard image={shop10} name="mouse" price="13"  addToCart={addToCart}/>
          <ProductCard image={shop11} name="vr" price="90"  addToCart={addToCart}/>
          <ProductCard image={shop12} name="ps5" price="200"  addToCart={addToCart}/>
        </div>
      </div>
      
    </div>
  );
}

export default Shop;
