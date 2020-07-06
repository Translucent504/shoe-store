import React, { useState } from 'react'
import '../styles/Shoe.css'
const Shoe = ({shoe}) => {
    // This component should manage its UI state based on
    // mouse entered and mouse left... if mouse is inside then render
    // one version else render the other....
    const shoes = [
        {
            name: "VALOUR BLUE",
            img_main: "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            imgs_side: [
                "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/c2106819-a9b5-49a2-ab49-6f08c4227cd5/killshot-og-midnight-navy-release-date.jpg"
            ]

        },
        {
            name: "JORDAN MARS 270 LONDON",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
            name: "RACER BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        }
    ];
    const [hover, setHover] = useState(false)

    const handleMouseMovement = () => {
        console.log(hover)
        setHover(!hover)
    }

    return (
        <div className="pic" onMouseEnter={handleMouseMovement} onMouseLeave={handleMouseMovement}>
            {!hover &&
                <div className="not-hovered">
                    <img src={shoe.img_main} alt={shoe.name}/>
                </div>}
            {hover &&
                <div className="hovered">
                    <img src={shoe.imgs_side} alt={shoe.name}/>
                </div>
            }

        </div>
    )
}

export default Shoe
