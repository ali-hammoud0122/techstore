import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/cart.css';

function Cart({ cartItems,removeFromCart }) {
  return (
    <div>
      
      <div className="cart">
        <h2 className="tcart">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="nocart">No items added yet.</p>
        ) : (
          <div className="carts">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <h5>{item.name}</h5>
                <p>${item.price}</p>
                 <button onClick={() => removeFromCart(index)} className="removeb">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Cart;