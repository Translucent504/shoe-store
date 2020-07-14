import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import bird1 from '../images/birds1.png'
import bird2 from '../images/birds2.png'

const birdStyle = {
    height:"200px",
}

const AnimatedBird = ({ customStyle }) => {
    const birdAnim = useWebAnimations({
        keyframes: {
            transform: ["translateX(0)", "translateX(-100%)"],
        },
        timing: {
            delay: 0, 
            duration: 1000, 
            iterations: Infinity, 
            direction: "normal", 
            easing: "steps(8,end)", 
        }
    });

    setInterval(() => {
        const animation = birdAnim.getAnimation()
        if (animation.playbackRate > 1) {
            animation.updatePlaybackRate(animation.playbackRate * 0.7)
        }
    }, 1500);

    const handleClick = () => {
        const animation = birdAnim.getAnimation()
        animation.updatePlaybackRate(animation.playbackRate * 1.3)
    }

    return (
        <div onClick={handleClick} style={{width:"170px", height:"200px", overflow:"hidden"}}>
            <img src={bird1} alt="" style={birdStyle} ref={birdAnim.ref}/>
        </div>
    )
}


export default AnimatedBird
