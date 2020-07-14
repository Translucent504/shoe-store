import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedMale from './AnimatedMale'
import bground from '../images/ray3.svg'
import '../styles/Home.css'
import heaven from '../audio/heavenly.mp3'

const buttonStyle = {
    position: "absolute",
    top: "30%",
    left: "32%"
}

const bgStyle = {
    // background: "rgb(250,250,226)",
    // background: "radial-gradient(circle, rgba(250,250,226,1) 13%, rgba(181,240,234,1) 49%, rgba(0,212,255,1) 100%)",
    position: 'absolute',
    backgroundImage: `url(${bground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: "100vw",
    height: "100vh",
    margin: "-10px 0 0 -10px"
}

const Home = () => {
    return (
        <div style={bgStyle} >
            <Link to="/shoestore" >
                <AnimatedMale customStyle={buttonStyle} />
            </Link>
            <audio autoPlay
                src={heaven}>
                Your browser does not support the
            <code>audio</code> element.
    </audio>
        </div>
    )
}

export default Home
