import { OrbitControls, Center,Environment } from "@react-three/drei";
import {useFrame} from '@react-three/fiber'
import {Depth, LayerMaterial, Noise} from 'lamina'
import * as THREE from 'three'

import React, { useRef } from "react";

const Background = () => {
    const background = useRef()

    useFrame((state, delta) => {
        background.current.rotation.x = 
        background.current.rotation.y =    
        background.current.rotation.z +=
            delta * 0.05
    })

    return <>
        <mesh scale={100} ref={background} >
            <sphereGeometry args={[1, 64, 64]} />   
            <LayerMaterial side={THREE.BackSide} >
                <Depth 
                    colorA="blue"
                    colorB="aquamarine"
                    alpha={0.75}
                    mode="normal"
                    near={130}
                    far={200}
                    origin={[ 100 , 100 , -100]}
                />
                <Noise 
                    mapping="local"
                    type="white"
                    scale={100}
                    colorA="white"
                    colorB="blue"
                    mode="subtract"
                    alpha={0.05}
                />
            </LayerMaterial>
            
        </mesh>
        
    </>
}

export default function BackgroundLeva() {

    
    return (
        <>
            <Environment files="potsdamer_platz_1k.hdr" />
            
            <OrbitControls 
                makeDefault
                maxPolarAngle={Math.PI * 0.5}
                autoRotate= { false }
                autoRotateSpeed={0.5}
            />
            
            <Center>
                <Background />
            </Center>
        </>
    );
}
