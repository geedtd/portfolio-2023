import { OrbitControls, Center,Environment } from "@react-three/drei";
// import {Perf} from 'r3f-perf'
import React, { useState, useRef } from "react";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import GerardoText from "./GerardoText";

export default function LandingExperience() {
    
    // const cube = useRef()
    // const [active, setActive] = useState(false)

    // const cubeJump = () => {
    //     const mass = cube.current.mass()
    //     cube.current.applyImpulse({ x: 0, y: 2 , z: 0})
    //     cube.current.applyTorqueImpulse({ x: 1, y: 1, z: 0})
    // }

    // useFrame(({clock}) => {
    //     const time =+ clock.getElapsedTime()
    //     // console.log(time)
    //     if (time > 8 ) {
    //         cubeJump()
            

    //     }
    // })
    
    return (
        <>
            <Environment files="potsdamer_platz_1k.hdr" />
            {/* <Perf position="top-left" /> */}
            <OrbitControls 
                makeDefault
                maxPolarAngle={Math.PI * 0.5}
                autoRotate= { false }
                autoRotateSpeed={0.5}
            />            
            <Center>
            <Physics>    
                

                {/* <RigidBody  
                    position={[ 1.5, 0, 0]} 
                    gravityScale={1}
                    restitution={ 0 }
                    friction={ 0 }
                    colliders={ false }
                    ref={cube}
                >
                    <mesh 
                        castShadow
                    >
                        <boxGeometry />
                        <meshStandardMaterial color="red" />
                    </mesh>
                    <CuboidCollider mass={ 30 } args={ [0.5, 0.5, 0.5]} />
                </RigidBody> */}

                <RigidBody 
                gravityScale={0.0}
                // position={[4.5, 1, -2]}
                
                >
                    <GerardoText />
                </RigidBody>
            </Physics>
        
            
            </Center>
        </>
    );
}
