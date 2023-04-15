import { OrbitControls, Text3D, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef } from 'react'

export default function ProjectsText() {

    const text = useRef()

    useFrame(({clock}) => {
        const time = clock.getElapsedTime()
        text.current.position.y = Math.cos(time)
        text.current.position.x = Math.sin(time)
        
    })
    console.log(text.current);

    return <>
        <group ref={text} >    
            <mesh>
                <Text3D
                    
                    font='/helvetiker_regular.typeface.json'
                    position={[ -15, 5, -5]}
                    rotation={[ 0, Math.PI * 1.5, 0 ]}
                    size={1.5}
                    height={0.15}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}

                >
                    Projects
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