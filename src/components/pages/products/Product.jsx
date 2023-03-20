import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategory } from '../../Redux/Actions/productAction';
import { DotEffect } from '../../useeffect';
import Nav from './Nav';
import './product.css'

function Product() {
  DotEffect("product");
  const disptach = useDispatch()
  const ItemData = useSelector((state) => state.ProductsData.categoryItemData);
  console.log(ItemData);

  const getCategoryApi = async () => {
    const respones = await fetch("https://fakestoreapi.com/products/categories");
    const categoryData = await respones.json();
    console.log(categoryData);
    disptach(setCategory(categoryData))
  }

  useEffect(() => {
    getCategoryApi()
  }, [])

  const createItemsTitle = ItemData.map((e) => {
    console.log(e);
    return (
      <div className="item-card" key={e.id}>
        <Link className='item-link' to={`/product/${e.id}`}>{e.title}</Link>
      </div>
    )
  })

  return (
    <div className="product">
      <div className="product-container">
        <Nav />
        <div className="show-items-product">
          {/* <div className="item-card">
            <Link className='item-link' to={'/product/9'}>WD 2TB Elements Portable External Hard Drive - USB 3.0</Link>
          </div> */}
          {createItemsTitle}
        </div>
      </div>
    </div>
  )
}

export default Product;