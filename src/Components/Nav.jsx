import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import CartContext, { CartProvider } from "../CartContext/CartContext";

const Nav = () => {
 const {cart,wishList}=useContext(CartProvider)
  const navLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"dashboard"}>Dashboard</Link>
      </li>
    </>
  );
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className={`navbar ${pathname==='/'?'bg-[#9538E2]':'bg-base-100'} `}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn mr-2" to={"/cart"}>Cart ({cart.length}) </Link>
        <Link className="btn" to={"/wishlist"}>WishList  ({wishList.length}) </Link>
      </div>
    </div>
  );
};

export default Nav;
