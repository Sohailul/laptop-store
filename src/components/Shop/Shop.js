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

        if(cart.length < 4){
            setCart(newCart);
        }
        else{
            alert("Don't Add more than 4 items");
        }
        
    };
    return (
        <div className='shop-container'>
            <div className=" container products-container row">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container mt-5 p-3">
                <h5 className='pt-3 pb-3 text-center'>Cart Summery</h5>
                {
                    cart.map(item => <Cart key={item.id} item={item}></Cart>)
                }

                <button className='btn btn-lg btn-primary mt-5' onClick={() => setCart([products[Math.floor(Math.random()*products.length)]])}>Choose One Item</button>
                <button className='btn btn-lg btn-primary mt-2' onClick={() => setCart([])}>Reset</button>
            </div>
        </div>
    );
};

export default Shop;