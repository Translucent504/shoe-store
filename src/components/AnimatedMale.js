import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import img1 from '../images/trans1.png'

const AnimatedMale = ({customStyle}) => {
    const maleAnim = useWebAnimations({
        keyframes: {
            transform: ["scale(0.5)", "scale(2)"],// Go through three colors
            filter: ["hue-rotate(0deg)","hue-rotate(360deg)"],
            
        },
        timing: {
            delay: 0, // Start with a 500ms delay
            duration: 5000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        }
    });

    return (
            <img style={{...customStyle}} src={img1} ref={maleAnim.ref} alt="GLORIOUS SHOE" />
    )
}

export default AnimatedMale
