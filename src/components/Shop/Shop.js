import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (laptop) => {
        const newCart = [...cart, laptop];
        setCart(newCart);
    };
    return (
        <div className='container shop-container'>
            <div className="products-container row">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container mt-5">
            <h3 className='pt-3'>Cart Summery</h3>
                {
                cart.map(item => <Cart item={item}></Cart>)
                }
            </div>
        </div>
    );
};

export default Shop;