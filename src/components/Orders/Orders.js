import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';


import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { initialCart} = useLoaderData();
    const [cart,setCart] = useState(initialCart);
    console.log(cart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb (id);
    }
    
    return (
        <div>
            <div className='shop-container'>
            <div className="orders-container">
               {
                cart.map(product =><ReviewItem
                key={product.id}
                product={product}
                handleRemoveItem={handleRemoveItem}
                ></ReviewItem>)
               }
               {
                cart.length === 0 && <h2>No Items For Review.Please <Link to="shop">Shop More..
                    </Link></h2>
               }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                ></Cart>
            </div>
        </div>
        </div>
        
    );
};

export default Orders;