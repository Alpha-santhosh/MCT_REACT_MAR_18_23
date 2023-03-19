import React from 'react'
import { DotEffect } from '../../useeffect';
import Nav from './Nav';
import './product.css'

function Product() {
  DotEffect("product");
  return (
    <div className="product">
      <div className="product-container">
        <Nav />
        <div className="show-items-product">

        </div>
      </div>
    </div>
  )
}

export default Product;