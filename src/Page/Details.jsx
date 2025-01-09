import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import "@smastrom/react-rating/style.css";
import CartContext, { CartProvider } from "../CartContext/CartContext";
import { key } from "localforage";
const Details = () => {
  const [detailProd, setDetailProd] = useState([]);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const { addToCart, addToWishList,} = useContext(CartProvider);
  useEffect(() => {
    fetch("../../public/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDetailProd(data);
      });
  }, []);

  useEffect(() => {
    const filter = detailProd.filter(
      (product) => parseInt(product.product_id) === parseInt(id)
    );
    setDetails(filter);
    console.log;
  }, [detailProd]);

  return (
    <>
      {details.map((detail) => (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="text-left">
              <h1 className="text-5xl font-bold">{detail.product_title}</h1>
              <h1 className="text-3xl font-bold"> {detail.price}</h1>

              <div className="badge badge-outline">
                {detail.availability ? "In Stock" : "Out of stock"}
              </div>
              <h1 className="text-3xl font-bold">{detail.description}</h1>
              <ul>
                <li>Display: {detail.specification.display}</li>
                <li>Ram: {detail.specification.ram}</li>
                <li>Storage: {detail.specification.storage}</li>
                <li>Processor: {detail.specification.processor}</li>
                <li>Camera: {detail.specification.camera}</li>
              </ul>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={parseInt(detail.rating)}
                  precision={0.5}
                />
              </Stack>
              <button
                onClick={() => addToCart(detail)}
                className="btn btn-primary"
              >
                Add To Cart
              </button>
              <button
                onClick={() => addToWishList(detail)}
                className="btn btn-primary"
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;
