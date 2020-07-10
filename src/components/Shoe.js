import React, { useState } from 'react'
import Modali, { useModali } from 'modali';
import ShoeDetails from './ShoeDetails'

import '../styles/Shoe.css'
const Shoe = ({shoe, handleCart }) => {
    // This component should manage its UI state based on
    // mouse entered and mouse left... if mouse is inside then render
    // one version else render the other....
    const [hover, setHover] = useState(false)
    const [completeModal, toggleCompleteModal] = useModali({
        large: true,
        animated: true,
        closeButton: false
    });
    const handleMouseMovement = () => {
        setHover(!hover)
    }
    return (
        <>
            <Modali.Modal {...completeModal}>
                <ShoeDetails shoe={shoe} toggle={() => toggleCompleteModal()} handleCart={handleCart}/>
            </Modali.Modal>
            {!hover
                ?
                <div className="shoe-container nothover" onClick={toggleCompleteModal}>
                    <picture>
                        <source srcset={shoe.img_main} type="image/webp" />
                        <source srcset={shoe.jpeg_img_main} type="image/jpeg" />
                        <img src={shoe.jpeg_img_main} alt={shoe.name} onMouseEnter={handleMouseMovement} />
                    </picture>
                    <span className="shoe-name">{shoe.name}</span>
                </div>
                :
                <div className="shoe-container hover" onClick={toggleCompleteModal}>
                    <picture>
                        <source srcset={shoe.img_side} type="image/webp" />
                        <source srcset={shoe.jpeg_img_side} type="image/jpeg" />
                        <img src={shoe.jpeg_img_side} alt={shoe.name} onMouseLeave={handleMouseMovement} />
                    </picture>
                    <span className="shoe-name">{shoe.name}</span>
                </div>
            }
        </>
    )
}

export default Shoe
