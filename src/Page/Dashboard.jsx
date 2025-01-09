import React, { useState } from 'react';
import Cart from './Cart';
import WishList from './WishList';


const Dashboard = () => {
    const [showCart,setShowCart]=useState(false)
    
    return (
        <div>
            <div className='bg-[#9538E2] p-6'>
           <h1 className='text-center text-4xl text-white' >Dashboard</h1>
           <p className='text-center text-white text-2xl'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
          
           <button onClick={()=>setShowCart(true)} className="btn btn-active btn-neutral">Cart</button>
           <button className="btn btn-active btn-accent">WishList</button>
        </div>
        <div>
            {
                (showCart?<Cart></Cart>:<WishList></WishList>)
            }
           </div>
        </div>
    );
};

export default Dashboard;