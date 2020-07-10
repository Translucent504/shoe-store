import React from 'react'

const CartItem = ({ cart, handleCart, item }) => {
    const count = cart.reduce((p, c) => c === item ? p + 1 : p, 0)
    return (
        <li className="flex-container">
            <div>
                {item} : {count}
            </div>
            <div>
                <button onClick={() => handleCart({name:item}, 1)}>+</button>
                <button onClick={() => handleCart({name:item}, -1)}>-</button>
            </div>
        </li>
    )
}

export default CartItem
