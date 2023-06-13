import { useThree } from '@react-three/fiber'
import { gsap } from 'gsap';
import React, { useEffect } from 'react'

function CameraControl({state}) {
    const {camera} = useThree();
    const states = [{
        x: 40,
        y:10,
        z:-5,
    },
    {
        x: 0,
        y:7,
        z:0,
    },
    {
        x: -5,
        y:5,
        z:10,
    }]
    useEffect(() => {
        Zoom(state)
    }, [state])

    const Zoom = (state) => {
        gsap.to(camera.position, {
            x: states[state].x,
            y: states[state].y,
            z: states[state].z,
            duration: 4,
            ease: "power3.inOut",
            })
    }
  return (
    <mesh></mesh>
  )
}

export default CameraControl