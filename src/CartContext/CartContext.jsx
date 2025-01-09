
import React, { createContext, useState } from 'react';
export const CartProvider = createContext()
const CartContext = ({children}) => {
    const [cart,setCart]=useState([])
    const addToCart = (item)=>{
        setCart([...cart,item])
    }
    console.log(cart)
    const value = {
        addToCart,
        cart
    }
    return (
       <CartProvider.Provider value={value} >{children}</CartProvider.Provider>
    );
};

export default CartContext;