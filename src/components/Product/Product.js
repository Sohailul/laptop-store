import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price } = product;
    return (
        <div className='col-md-4'>
            <div className='card mt-5'>
                <div className='image-container'>
                    <img src={img} alt="" width="300"/>
                </div>
                <div className='card-body'>
                    <h3 className='card-title'>{name}</h3>
                    <p>Price: ${price}</p>
                    <button onClick={() => handleAddToCart(product)} className='text-white btn btn-primary'>Add to cart <BsFillCartPlusFill /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;