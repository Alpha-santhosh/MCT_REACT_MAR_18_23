import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function ProductDetails() {
  const { productId } = useParams()
  console.log(productId);
  const [selectedItem, setSelectedItem] = useState([]);

  const getSelectedItemApi = async (id) => {
    const respones = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await respones.json();
    setSelectedItem(data)
    console.log(data);
  }
  useEffect(() => {
    getSelectedItemApi(productId)
  }, [productId])

  console.log("Selected", selectedItem);
  const { id, title, price, description, category } = selectedItem;
  // console.log(selectedItem.rating.rate);
  return (
    <div className="pdd">
      <div className="selected_item_card" key={id}>
        <h2 className='si_h2'>{selectedItem.category} Category</h2>
        <div className="si_content">
          <div className="si_img_holder">
            <img className='si_img' src={selectedItem.image} alt="" />
          </div>
          <div className="si_detail">
            <hr />
            <div className="pn"><span className='si_title'>Product Name</span> <br />{title}</div>
            <hr />
            <div className="pn"><span className='si_title'>Product Prize</span> <br />$ {price}</div>
            <hr />
            <div className="pn"><span className='si_title'>Product Description</span> <br />{description}</div>
            <hr />
            <div className="pn"><span className='si_title'>Product Rating</span> <br />{}</div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails