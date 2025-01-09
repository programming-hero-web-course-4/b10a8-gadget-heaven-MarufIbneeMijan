
import React, { createContext, useEffect, useState } from 'react';
export const CartProvider = createContext()
const CartContext = ({children}) => {
    const [cart,setCart]= useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
      });
      const [order,setOrder]=useState(false)
      const [wishList,setWishList]=useState(() => {
        const savedWishList = localStorage.getItem('wishlist');
        return savedWishList ? JSON.parse(savedWishList) : [];
      });
      useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishList));
      }, [wishList]);
 
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
 
    const addToCart = (item)=>{
        setCart([...cart,item])
    
    }
    
    const addToWishList = (item)=>{
        setWishList([...wishList,item])
    
    }
    const deleteCart = (id)=>{
       
        const filter = cart.filter(cartItem=>cartItem.product_id!==id)

        setCart(filter)
    }
    const deleteWishList= (id)=>{
       
        const filter = wishList.filter(cartItem=>cartItem.product_id!==id)

        setWishList(filter)
    }
       
        const handleSort= ()=>{
            const sorted=[...cart].sort((a,b)=>{
               
                return a.price-b.price
              
               
            })
            setCart(sorted)
        }
           
        
       
   
    

    const value = {
        addToCart,
        cart,
        deleteCart,
        addToWishList,
        deleteWishList,wishList,setOrder,handleSort
        
    }
    return (
       <CartProvider.Provider value={value} >{children}</CartProvider.Provider>
    );
};

export default CartContext;