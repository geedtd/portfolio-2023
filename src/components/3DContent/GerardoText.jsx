import { OrbitControls, Text3D, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";

import { useState, useRef, useEffect } from 'react'

export default function GerardoText() {

    const [size, setSize] = useState({
        ratio: 1.7,
        xPosition: 4.2
    })
    const [shouldResize, setShouldResize] = useState(true)
    const text = useRef()

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        });

    useFrame(({clock}) => {
        const time = clock.getElapsedTime()
        text.current.position.y = Math.cos(time)/4
        text.current.position.x = Math.sin(time)/8
        
    })

    // if(screenSize.width < 1000) {
    //     setSize(1)
    // }

    useEffect(() => {
        const handleResize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (shouldResize && (screenSize.width <= 1000)) {
          // Perform data fetching or any one-time logic here
          // ...
    
          // Update the state
            setSize({
                ratio: 1.3,
                xPosition: 5.2 ,
            });
    
          // Set shouldResize to false to prevent further updates
            setShouldResize(false);
        }
    }, [shouldResize]);

    console.log(size.xPosition)
    
    return <>
        <group ref={text} >    
            <mesh>
                <Text3D
                    onClick={() => console.log(text)}
                    font='/Bebas_Neue_Regular.json'
                    position={[ size.xPosition, 0, -10]}
                    rotation={[ 0, Math.PI * 2.1, 0 ]}
                    size={size.ratio}
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
    </>
}