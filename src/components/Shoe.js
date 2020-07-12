import React, { useState } from 'react'
import Modali, { useModali } from 'modali';
import ShoeDetails from './ShoeDetails'
import '../styles/Shoe.css'
import tmale from '../images/tmale.png'
import tfemale from '../images/tfemale.png'

const Shoe = ({shoe, handleCart, notify }) => {
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
                <ShoeDetails notify={notify} shoe={shoe} toggle={() => toggleCompleteModal()} handleCart={handleCart}/>
            </Modali.Modal>
            {!hover
                ?
                <div className="shoe-container nothover" onClick={toggleCompleteModal} onMouseEnter={handleMouseMovement}>
                    <picture>
                        <source srcSet={shoe.img_main} type="image/webp" />
                        <source srcSet={shoe.jpeg_img_main} type="image/jpeg" />
                        <img src={shoe.jpeg_img_main} alt={shoe.name}  />
                    </picture>
                    <span className="shoe-name">{shoe.name}</span>
                    <img src={shoe.gender==='m'?tmale:tfemale} alt="" className="shoe-gender"/>
                </div>
                :
                <div className="shoe-container hover" onClick={toggleCompleteModal} onMouseLeave={handleMouseMovement}>
                    <picture>
                        <source srcSet={shoe.img_side} type="image/webp" />
                        <source srcSet={shoe.jpeg_img_side} type="image/jpeg" />
                        <img src={shoe.jpeg_img_side} alt={shoe.name}  />
                    </picture>
                    <span className="shoe-name">{shoe.name}</span>
                    <img src={shoe.gender==='m'?tmale:tfemale} alt="" className="shoe-gender"/>
                </div>
            }
        </>
    )
}

export default Shoe
