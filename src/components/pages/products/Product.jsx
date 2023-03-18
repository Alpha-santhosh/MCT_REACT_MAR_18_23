import React, { useContext, useEffect } from 'react'
import { GoblaData } from '../../../App';

function Product() {
  const { linkClicked } = useContext(GoblaData)
  useEffect(() => {
    console.log("Welcome to products");
    linkClicked("product")
  }, [])
  return (
    <div>Product</div>
  )
}

export default Product;