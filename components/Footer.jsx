import React from 'react'
import Link from 'next/link'
// import  { AiOutlineShoppingCart } from 'react-icon/ai'

import { FaBeer } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Jsm HeadPhones</Link>
      </p>
      <h3> Lets go for a <FaBeer />? </h3>
      {/* <button type="button" className="cart-icon" onClick=""><AiOutlineShoppingCart /></button> */}
    </div>
  )
}

export default Footer
