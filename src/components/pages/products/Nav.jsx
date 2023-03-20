import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryItem } from '../../Redux/Actions/productAction';

function Nav() {
    const cateItems = useSelector((state) => state.ProductsData.AllsetCategory);
    const [serachKey, setSearchKey] = useState();
    const dispatch = useDispatch()
    const [btnColor, setbtncolor] = useState({
        electronics: true,
        jewelery: false,
        men: false,
        women: false,
    });

    const getCategoryDataApi = async (keyvalue) => {
        const respones = await fetch(`https://fakestoreapi.com/products/category/${keyvalue}`)
        const Catitems = await respones.json()
        dispatch(setCategoryItem(Catitems));
    }

    useEffect(() => {
        getCategoryDataApi("electronics")
        setSearchKey("electronics")
    }, []);

    useEffect(() => {
        getCategoryDataApi(serachKey)
    }, [serachKey])

    const handleNavClick = (event) => {
        console.log(event.target.value);
        setSearchKey(event.target.value);
        setbtncolor(() => {
            switch (event.target.value) {
                case "electronics":
                    return { electronics: true, jewelery: false, men: false, women: false };
                case "jewelery":
                    return { electronics: false, jewelery: true, men: false, women: false };
                case "men's clothing":
                    return { electronics: false, jewelery: false, men: true, women: false };
                case "women's clothing":
                    return { electronics: false, jewelery: false, men: false, women: true };
                default:
                    return { electronics: true, jewelery: false, men: false, women: false };
            }
        })
    }

    const CreateNavBtns = cateItems.map((e) => {
        // const ketSelet = e;
        return (<>
            <button type='button' className='nav-btn-link' value={e} onClick={handleNavClick} >{e}</button>
        </>)

    })

    return (
        <div className="nav-product">
            <h2 className='h2-product'>CATEGORIES</h2>
            <div className="cat-list">
                {/* <button type='button' className='nav-btn-link' value="electronics" onClick={handleNavClick} >Electronics</button> */}
                <h2>{serachKey}</h2>
                {CreateNavBtns}
            </div>
        </div>
    )
}

export default Nav;