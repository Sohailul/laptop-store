import React from 'react';
import './Cart.css';

const Cart = ({ item }) => {
    const {img, name} = item;
    return (
        <div className='cart-data'>
            <img className="img-thumbnail" src={img} alt="" width="60" height="60" />
            <p>{name.slice(0, 15)}</p>
        </div>
    );
};

export default Cart;