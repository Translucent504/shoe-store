import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import useWebAnimations from "@wellyshen/use-web-animations";
import AnimatedMale from './AnimatedMale'
import bground from '../images/bground.jpg'
import '../styles/Home.css'

const buttonStyle = {
    position: "absolute",
    top: "50%",
    left: "50%"
}



const bgStyle = {
    // background: "rgb(250,250,226)",
    // background: "radial-gradient(circle, rgba(250,250,226,1) 13%, rgba(181,240,234,1) 49%, rgba(0,212,255,1) 100%)",
    backgroundImage: `url(${bground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: "100vw",
    height: "100vh"
}

const Home = () => {
    const buttonRef = useRef();
    const { playState } = useWebAnimations({
        ref: buttonRef,
        keyframes: {
            transform: ["scale(2)", "scale(6)"], // Go through three colors
        },
        timing: {
            delay: 0, // Start with a 500ms delay
            duration: 6000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        }
    });

    setInterval(() => {

    }, 3000);

    return (
        <div style={bgStyle} >
            <div className="home-container">
                <AnimatedMale />
                <Link to="/shoestore">
                    <button ref={buttonRef} style={buttonStyle}>Enter Shoe Store</button>
                </Link>
            </div>

        </div>
    )
}

export default Home
