import React from 'react'
import CartItem from './CartItem'
import '../styles/CartSidebar.css'
import shoes from '../utils/ImageBunch'
var _ = require('lodash')

const CartSidebar = ({ handleShowCart, showCart, cart, handleCart }) => {
    const unique = [...new Set(cart)]
    return (
        <div className="sidebar-container" style={showCart ? { transform: 'translateX(-400px)' } : {}}>
            <div onClick={handleShowCart} className="sidebar-heading">
                <span className="header">Cart Items </span>
                <span className="close">&times;</span>
            </div>
            <ul className="cart-list">
                {unique.map(c => <CartItem className="cart-item" key={c} item={c} cart={cart} handleCart={handleCart} />)}
            </ul>
            <div className="total">
                <h1>total: ${_.sum(cart.map(c => _.find(shoes, ['name', c]).price))}</h1>
            </div>
        </div>
    )
}

export default CartSidebar
