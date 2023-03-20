import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryItem } from '../../Redux/Actions/productAction';

function Nav() {
    const cateItems = useSelector((state) => state.ProductsData.AllsetCategory);
    // console.log("Nav", cateItems);
    const [serachKey, setSearchKey] = useState(cateItems[0]);
    const dispatch = useDispatch()

    const getCategoryDataApi = async (keyvalue) => {
        const respones = await fetch(`https://fakestoreapi.com/products/category/${keyvalue}`)
        const Catitems = await respones.json()
        console.log(Catitems);
        dispatch(setCategoryItem(Catitems));
    }
    useEffect(() => {
        getCategoryDataApi(serachKey)
    }, [serachKey])

    const handleNavClick = (event) => {
        console.log(event.target.value);
        setSearchKey(event.target.value);
    }

    const CreateNavBtns = cateItems.map((e) => {
        // console.log(e);
        return (<>
            <button type='button' className='nav-btn-link' value={e} onClick={handleNavClick} >{e}</button>
        </>)
    })

    return (
        <div className="nav-product">
            <h2 className='h2-product'>CATEGORIES</h2>
            <div className="cat-list">
                {/* <button type='button' className='nav-btn-link' value="electronics" onClick={handleNavClick} >Electronics</button> */}
                {CreateNavBtns}
            </div>
        </div>
    )
}

export default Nav;