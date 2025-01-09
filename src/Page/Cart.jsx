import React, { useContext } from 'react';
import  { CartProvider } from '../CartContext/CartContext';

const Cart = () => {
    const {cart}=useContext(CartProvider)
    
    return (
        <div>
           
        </div>
    );
};

export default Cart;