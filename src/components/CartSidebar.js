import React from 'react'
import CartItem from './CartItem'

const CartSidebar = ({cart, handleCart}) => {
    const unique = [...new Set(cart)]
    return (
        <div>
        <h1>Cart Items</h1>
        <ul>
            {unique.map(c => <CartItem key={c} item={c} cart={cart} handleCart={handleCart}/>)}
        </ul>
        </div>
    )
}

export default CartSidebar
