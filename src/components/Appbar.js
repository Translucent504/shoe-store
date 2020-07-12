import React from 'react'
import '../styles/Appbar.css'
import female from '../images/female.png'
import male from '../images/male.jpg'


const Appbar = ({showCart, handleShowCart, handleGender, gender}) => {
    return (
        <div className="appbar">
            <div className="logo">
                <h2>ERU</h2>
                <a href="https://github.com/Translucent504/shoe-store" target="/blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /></a>
            </div>
            <div className="genders">
                <img onClick={()=> handleGender('f')} src={female} alt="" style={gender==='f'?{filter:'invert(1)'}:{}}/>
                <img className="img-male" onClick={()=> handleGender('m')} src={male} alt="" style={gender==='m'?{filter:'invert(1)'}:{}}/>
            </div>
            <img className="cart" style= {showCart ? {transform:'rotate(30deg)'} : {}} onClick={handleShowCart} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTm9QJTV0eeB-2A52SyH_qh6_n1dWPWPYo6uw&usqp=CAU" alt="" />
        </div>
    )
}

export default Appbar
