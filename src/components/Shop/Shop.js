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
            <div className="cart-container mt-5 cart">
            <h4 className='pt-3 pb-3'>Cart Summery</h4>
                {
                cart.map(item => <Cart item={item}></Cart>)
                }

                <button className='btn btn-lg btn-primary mt-5' onClick={() => setCart([])}>Reset</button>
            </div>
        </div>
    );
};

export default Shop;