import React from 'react';
import './Cart.css';

const Cart = ({ item }) => {
    const {img, name} = item;
    return (

        <div className='container row'>
            <div className='cart-data col-md-12'>
            <img className="img-thumbnail" src={img} alt="" width="60" height="60" />
            <p className='ms-2'>{name.slice(0, 15)}</p>
        </div>
        </div>
    );
};

export default Cart;