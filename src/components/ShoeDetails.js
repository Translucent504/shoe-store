import React, { useState } from 'react'
import '../styles/ShoeDetails.css'

const ShoeDetails = ({ shoe, toggle, handleCart, notify }) => {
    const [qty, setQty] = useState(1)
    const handleAddToCart = () => {
        if (qty > 0) {
            notify(shoe, qty)
            handleCart(shoe, qty)
            setQty(1)
        }
        toggle()
    }
    return (
        <div className="grid-container">
            <img src={shoe.img_main} alt={shoe.name} />
            <section className="shoe-details">
                <div className="header-price">
                    <h1>{shoe.name}</h1>
                    <span>${shoe.price}</span>
                </div>
                <div className="selectors">
                <div className="cart-buttons" style={{gridColumnStart:'2'}}>
                    <button style={{fontSize:'2rem',width:'50%', backgroundColor:'mediumspringgreen'}} onClick={() => setQty(qty + 1 < 0 ? 0 : qty + 1)}>+</button>
                    <button style={{fontSize:'2rem',width:'50%', backgroundColor:'rgb(209, 18, 18)'}} onClick={() => setQty(qty - 1 < 0 ? 0 : qty - 1)}>-</button>
                </div>
                    <select style={{gridColumnStart:'1', gridRowStart:'2'}} defaultValue="select size" className="size" id="size">
                        <option value="select size" disabled hidden>Select Size</option>
                        <option value="1">32</option>
                        <option value="2">47</option>
                        <option value="3">50</option>
                    </select>
                    <input style={{gridColumnStart:'2', gridRowStart:'2'}} type="number" name="qty" id="qty" placeholder="Qty" value={qty} onChange={e => setQty(e.target.value < 0 ? 0 : e.target.value)} />
                </div>
                <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            </section>
        </div>
    )
}

export default ShoeDetails
