import React from 'react'
import {client} from "../lib/client";
import {Product, FooterBanner, Herobanner} from '../components'

const Index = ({products, bannerData}) => {
  return (
    <>
      <Herobanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
        <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>            
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData }
  }
}

export default Index;
