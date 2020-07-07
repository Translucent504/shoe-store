import React from 'react'
import '../styles/ShoeDetails.css'

const ShoeDetails = ({ shoe }) => {
    return (
        <div className="grid-container">
            <img src={shoe.img_main} alt={shoe.name} />
            <section className="shoe-details">
                <h1>{shoe.name}</h1>
                <sub>130$</sub>
                <div className="selectors">
                    <select className="size" id="size">
                        <option value="" disabled selected hidden>Select Size</option>
                        <option value="1">32</option>
                        <option value="2">47</option>
                        <option value="3">50</option>
                    </select>
                    <input type="number" name="qty" id="qty" placeholder="Qty" />
                </div>
                <button className="add-to-cart">Add to Cart</button>
            </section>
        </div>
    )
}

export default ShoeDetails
