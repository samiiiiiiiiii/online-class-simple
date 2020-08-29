import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    let total =0;
    for (let i=0; i<cart.length; i++){
        const product =cart[i];
        total=total+product.price;
    }
    
    
    return (
        <div className="cart-style">
            <h1>Order summery</h1>
            <p>items order:{cart.length}</p>
            <p>Total Price:${total}</p>
        </div>
    );
};

export default Cart;