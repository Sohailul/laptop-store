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
                    <h4 className='card-title'>{name}</h4>
                    <h6 className='mb-4'>Price: ${price}</h6>
                    <button onClick={() => handleAddToCart(product)} className='text-white btn btn-primary'>Add to cart <BsFillCartPlusFill /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;