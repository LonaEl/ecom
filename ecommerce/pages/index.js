import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home= () => {
  return (
    <>
    HeroBanner

    <div className='products-heading' >
      <h2>selling products</h2>
      <p>Speakers of different variations</p>
    </div>
    <div className='products-container' >
      {['Product 1', 'Product2'].map((product) => product)}
    </div>
    Footer
    </>
  )
}

export default Home