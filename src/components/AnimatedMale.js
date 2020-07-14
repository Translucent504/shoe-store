import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import img1 from '../images/trans1.png'

let maleStyle = {
    height: "200px",
}

const AnimatedMale = ({customStyle}) => {
    const maleAnim = useWebAnimations({
        keyframes: {
            transform: ["translateY(0px)", "translateY(100px)"],// Go through three colors
            filter: ["hue-rotate(0deg)","hue-rotate(360deg)"]
        },
        timing: {
            delay: 0, // Start with a 500ms delay
            duration: 7000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        }
    });

    setInterval(() => {
        const animation = maleAnim.getAnimation()
        if (animation.playbackRate > 2) {
            animation.updatePlaybackRate(animation.playbackRate * 0.9)
        }
    }, 1500);

    const handleClick = () => {
        const animation = maleAnim.getAnimation()
        animation.updatePlaybackRate(animation.playbackRate * 1.5)
    }
    return (
            <img style={{...maleStyle, ...customStyle}} onClick={handleClick} src={img1} ref={maleAnim.ref} alt="" />
    )
}

export default AnimatedMale
