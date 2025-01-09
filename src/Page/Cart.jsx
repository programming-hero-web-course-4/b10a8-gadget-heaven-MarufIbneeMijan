import React, { useContext } from "react";
import { CartProvider } from "../CartContext/CartContext";

const Cart = () => {
  const { cart, deleteCart, handleSort } = useContext(CartProvider);

  return (
    <div>
      <div>
        <button className="btn btn-outline" onClick={() => handleSort()}>
          Sort By Price
        </button>
      </div>
      {cart.map((cart) => (
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-left">{cart.product_title}</h2>
            <p  className="text-left">Price: {cart.price}</p>
          
              <button
                onClick={() => deleteCart(cart.product_id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
