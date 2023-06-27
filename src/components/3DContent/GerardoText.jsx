import { OrbitControls, Text3D, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";

import { useState, useRef } from 'react'

export default function GerardoText() {

    const [size, setSize] = useState(1.8)
    const text = useRef()

    useFrame(({clock}) => {
        const time = clock.getElapsedTime()
        text.current.position.y = Math.cos(time)/4
        text.current.position.x = Math.sin(time)/8
        
    })
    
    return <>
        <group ref={text} >    
            <mesh>
                <Text3D
                    onClick={() => console.log(text)}
                    font='/Bebas_Neue_Regular.json'
                    position={[ 1, 0, 0]}
                    rotation={[ 0, Math.PI * 2.1, 0 ]}
                    size={size}
                    height={.16}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.05}
                    bevelSize={0.001}
                    bevelOffset={0.0}
                    bevelSegments={2}
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