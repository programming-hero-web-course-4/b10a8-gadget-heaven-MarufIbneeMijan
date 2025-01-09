import React, { useContext } from 'react';
import  { CartProvider } from '../CartContext/CartContext';


const WishList = () => {
    const {wishList, deleteWishList}=useContext(CartProvider)
    return (
        <div>
            {
               wishList.map(cart=>
                    <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{cart.product_title}</h2>
    <p>Price: {cart.price}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>deleteWishList(cart.product_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
                )
            }
        </div>
    );
};

export default WishList;