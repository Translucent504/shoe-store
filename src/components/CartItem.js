import React from 'react'
import '../styles/CartItem.css'
import shoes from '../utils/ImageBunch'

const CartItem = ({ cart, handleCart, item }) => {
    const count = cart.reduce((p, c) => c === item ? p + 1 : p, 0)
    const shoe = shoes.filter(s => s.name === item)[0]
    return (
        <li className="grid-container-cart">
            <picture>
                <source srcSet={shoe.img_main} type="image/webp" />
                <source srcSet={shoe.jpeg_img_main} type="image/jpeg" />
                <img src={shoe.jpeg_img_main} alt={shoe.name} />
            </picture>
            <div className="flex-container-cart">
                <div className="details">
                    {item}  &times;{count}
                </div>
                <div className="qol-cart-buttons">
                    <button className="plus" onClick={() => handleCart({ name: item }, 1)}>+</button>
                    <button className="minus" onClick={() => handleCart({ name: item }, -1)}>-</button>
                </div>
            </div>
        </li>
    )
}

export default CartItem
