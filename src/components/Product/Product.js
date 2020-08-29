import React from 'react';
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    console.log(props.product.name);
    const{img,name,category,price}=props.product
    return (
        <div className="product">
            <div className="product-img">
            <img src={img} alt=""/>
            </div>
            <div>
            <h4 className="product-name">{name}</h4>
            
            <h4>{category}</h4>
            
            <h4>${price}</h4>
            <button className="main-button" onClick={()=>props.handleAddProduct(props.product)}
            >
                 add to cart
            </button>
            </div>
        
        </div>
    );
};

export default Product;