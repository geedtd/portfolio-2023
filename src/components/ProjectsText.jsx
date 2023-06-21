import { OrbitControls, Text3D, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef } from 'react'

export default function ProjectsText() {

    const text = useRef()

    useFrame(({clock}) => {
        const time = clock.getElapsedTime()
        text.current.position.y = Math.cos(time)/2
        text.current.position.x = Math.sin(time)/4
        
    })
    console.log(text.position);

    return <>
        <group ref={text} >    
            <mesh>
                <Text3D
                    
                    font='/helvetiker_regular.typeface.json'
                    position={[ -3.3, 1.5, 2]}
                    rotation={[ 0, Math.PI * 1.5, 0 ]}
                    size={.25}
                    height={0.08}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.01}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={3}
                >
                    Contact {'\n'} Me
                    <meshNormalMaterial />
                </Text3D>
            </mesh>
        </group>
        <mesh position={[ -15,5.5,7]}>
            <octahedronGeometry
                
            />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
    </>
}