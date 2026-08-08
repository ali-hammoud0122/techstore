//this is bootstrap
import '../style/ProductCard.css';
import { useState } from 'react';

function ProductCard({ image, name, price, addToCart }) {
  const [added, setAdded] = useState(false);

  function handleClick() {
    setAdded(true);
    addToCart({ image, name, price });
  }

  let mybuton;
  if (added) {
    mybuton = "Item Added";
  } else {
    mybuton = "Add to Cart";
  }
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <button onClick={handleClick} className="btn btn-primary">
          {mybuton}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;