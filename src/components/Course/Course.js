import React, { useState } from 'react';
import './Course.css'

import fakedata from '../../fakeData/fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Course = () => {
    const first15=fakedata.slice(0,15);
    const [courses,setCourses] = useState(first15);
    const[cart,setCart]=useState([]);

    const handleAddProduct =(product)=>{
        // console.log('Product added',product);
        const newCart=[...cart,product];
        setCart(newCart);

    }
    return (
        <div className="course-container">
           <div className="product-container">
                {
                    courses.map(pd=><Product 
                        handleAddProduct={handleAddProduct}
                        product={pd}>

                        </Product>)
                }
           </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;