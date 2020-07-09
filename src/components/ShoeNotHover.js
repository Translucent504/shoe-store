import React from 'react'

const ShoeNotHover = ({ shoe, toggleCompleteModal, handleMouseMovement }) => {
    return (
        <div >
            <img src={shoe.img_main} alt={shoe.name} onMouseEnter={handleMouseMovement} />
            <span className="shoe-name">{shoe.name}</span>
        </div>

    )
}

export default ShoeNotHover
