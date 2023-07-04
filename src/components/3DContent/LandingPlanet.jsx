import { OrbitControls, Center,Environment } from "@react-three/drei";
// import {Perf} from 'r3f-perf'
import React, { useState, useRef } from "react";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { DevPlanet } from "./DevPlanet";

export default function LandingExperience(props) {
    
    console.log(props)
    
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
                <Physics>    
                    
                    <RigidBody  
                    position={[ 4.5, 0, 0]} 
                    gravityScale={0.1}
                    restitution={ 0 }
                    friction={ 0 }
                    colliders={ false }
                    // ref={cube}
                    >
                    {/* <mesh 
                        castShadow
                        >
                        <boxGeometry />
                        <meshStandardMaterial color="red" />
                    </mesh> */}
                    <CuboidCollider mass={ 30 } args={ [0.5, 0.5, 0.5]} />
                </RigidBody>

                    <RigidBody 
                    gravityScale={0.0}
                    // position={[4.5, 1, -2]}
                    >
                        <DevPlanet scale={1.8}/>
                    </RigidBody>
                </Physics>
            </Center>
        </>
    );
}
