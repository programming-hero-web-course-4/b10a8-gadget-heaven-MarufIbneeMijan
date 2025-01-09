import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {product_title,price,product_id}=product
    
    return (
        <div className="card bg-base-100 w-[300px] text-center  shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p> Price: {price}</p>
          <Link to={`/details/${product_id}`} >See Details</Link>
         
        </div>
      </div>
    );
};

export default ProductCard;