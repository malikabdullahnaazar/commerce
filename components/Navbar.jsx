import React from 'react'
import Link from 'next/link'
import { useStateContext } from "../context/statecontex";
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart';
const Navbar = () => {
  const {showCart,setShowCart,totalQuantities}=useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM HeadPhones</Link>
      </p>
      <button type="button" className="cart-icon" onClick={()=>setShowCart(true)}><AiOutlineShopping /></button>
        <span className="cart-item-qty">{totalQuantities}</span>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
