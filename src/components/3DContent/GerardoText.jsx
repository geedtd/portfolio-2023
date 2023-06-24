import { OrbitControls, Text3D, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";

import { useState, useRef } from 'react'

export default function GerardoText() {

    const text = useRef()

    // useFrame(({clock}) => {
    //     const time = clock.getElapsedTime()
    //     text.current.position.y = Math.cos(time)/2
    //     text.current.position.x = Math.sin(time)/4
        
    // })
    

    


    return <>
        <group ref={text} >    
            <mesh>
                <Text3D
                    onClick={() => console.log(text)}
                    font='/Bebas_Neue_Regular.json'
                    position={[ 0, 0, 0]}
                    rotation={[ 0, Math.PI * 1.5, 0 ]}
                    size={1}
                    height={0.08}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.01}
                    bevelSize={0.001}
                    bevelOffset={0}
                    bevelSegments={3}
                >
                    GERARDO {'\n'} CAZARES
                    <meshNormalMaterial />
                </Text3D>
            </mesh>
        </group>
        <mesh>
            <planeGeometry
                position={[ -1.3, 1.5, 2]}

            />
        </mesh>
        
    </>
}