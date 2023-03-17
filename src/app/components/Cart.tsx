import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../hooks';

const Cart = () => {
    const cartItems = useAppSelector((state) => state.products.carts)
    console.log(cartItems)

    return (
        <div>
            {/* {cartItems.map(items => (
                return 
            )) */}
        </div>
    );
};

export default Cart;