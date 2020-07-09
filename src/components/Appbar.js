import React from 'react'
import '../styles/Appbar.css'
import female from '../images/female.png'
import male from '../images/male.jpg'

const Appbar = () => {
    return (
        <div className="appbar">
            <div className="logo">
                <h2>ERU</h2>
                <a href="https://github.com/Translucent504/shoe-store" target="/blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /></a>
            </div>
            <div className="genders">
                <img src={female} alt="" />
                <img src={male} alt="" />
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTm9QJTV0eeB-2A52SyH_qh6_n1dWPWPYo6uw&usqp=CAU" alt="" className="cart"/>
        </div>
    )
}

export default Appbar
