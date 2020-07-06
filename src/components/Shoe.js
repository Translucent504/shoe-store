import React, { useState } from 'react'
import '../styles/Shoe.css'

const Shoe = ({ shoe }) => {
    // This component should manage its UI state based on
    // mouse entered and mouse left... if mouse is inside then render
    // one version else render the other....
    const [hover, setHover] = useState(false)

    const handleMouseMovement = () => {
        console.log(hover)
        setHover(!hover)
    }

    if (!hover) {
        return (
            <div className="shoe-container" >
                <img src={shoe.img_main} alt={shoe.name} onMouseEnter={handleMouseMovement} />
                <span className="shoe-name">{shoe.name}</span>
            </div>
        )
    } else if (hover) {
        return (
            <div className="shoe-container" >
                <img src={shoe.img_side} alt={shoe.name} onMouseLeave={handleMouseMovement} />
                <span className="shoe-name">{shoe.name}</span>
            </div>
        )

    }
}

export default Shoe
