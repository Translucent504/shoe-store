import React from 'react'

const ShoeDetails = ({shoe}) => {
    return (
        <div className="container">
            <h1>{shoe.name}</h1>
            <img src={shoe.img_main} alt={shoe.name}/>
        </div>
    )
}

export default ShoeDetails
