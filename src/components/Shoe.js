import React, { useState } from 'react'
import Modali, { useModali } from 'modali';
import ShoeDetails from './ShoeDetails'
import '../styles/Shoe.css'

const Shoe = ({ shoe }) => {
    // This component should manage its UI state based on
    // mouse entered and mouse left... if mouse is inside then render
    // one version else render the other....
    const [hover, setHover] = useState(false)
    const [completeModal, toggleCompleteModal] = useModali({
        large: true,
        animated: true,
        title: <div className="modaltitle">Shoe details</div>,
        buttons: [
            <Modali.Button
                label="Cancel"
                isStyleCancel
                onClick={() => toggleCompleteModal()}
            />,
            <Modali.Button
                label="Add to cart"
                isStyleDefault
                onClick={() => toggleCompleteModal()}
            />,
        ],
    });
    const handleMouseMovement = () => {
        setHover(!hover)
    }

    return (
        <>
            <Modali.Modal {...completeModal}>
                <ShoeDetails shoe={shoe} />
            </Modali.Modal>

            {
                !hover
                    ?
                    <div className="shoe-container nothover" >
                        <img src={shoe.img_main} alt={shoe.name} onMouseEnter={handleMouseMovement} />
                        <span className="shoe-name">{shoe.name}</span>
                    </div>
                    :
                    <div className="shoe-container hover" onClick={toggleCompleteModal}>
                        <img src={shoe.img_side} alt={shoe.name} onMouseLeave={handleMouseMovement} />
                        <span className="shoe-name">{shoe.name}</span>
                    </div>
            }
        </>
    )
}

export default Shoe
