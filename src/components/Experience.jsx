import { OrbitControls, Center } from "@react-three/drei";
import {Perf} from 'r3f-perf'
import {useLoader, useFrame} from '@react-three/fiber'
import {Depth, LayerMaterial, Noise} from 'lamina'
import * as THREE from 'three'

import React, { useState, useRef } from "react";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";

import { Model } from "./Portfolio";
import { ProjectBuilding} from "./ProjectBuilding"
import ProjectsText from "./ProjectsText";

const Background = () => {
    const background = useRef()

    useFrame((state, delta) => {
        background.current.rotation.x = 
        background.current.rotation.y =    
        background.current.rotation.z +=
            delta * 0.2
    })

    return <>
        <mesh scale={100} ref={background} >
            <sphereGeometry args={[1, 64, 64]} />   
            <LayerMaterial side={THREE.BackSide} >
                <Depth 
                    colorA="#fff000"
                    colorB="aquamarine"
                    alpha={1}
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
                    alpha={0.2}
                />

            </LayerMaterial>
            
        </mesh>
        
    </>
}

export default function Experience() {
    const cube = useRef()
    const [active, setActive] = useState(false)

    const cubeJump = () => {
        const mass = cube.current.mass()
        cube.current.applyImpulse({ x: 0, y: 2 , z: 0})
        cube.current.applyTorqueImpulse({ x: 1, y: 1, z: 0})
    }

    useFrame(({clock}) => {
        const time =+ clock.getElapsedTime()
        // console.log(time)
        if (time > 8 ) {
            cubeJump()
            

        }
    })

    
    
    return (
        <>
            <Perf position="top-left" />
            <OrbitControls 
                makeDefault
                maxPolarAngle={Math.PI * 0.5}
                autoRotate= { false }
                autoRotateSpeed={0.5}
            />

            <directionalLight castShadow position={[0, 10, 10]} intensity={1.5} />
            <ambientLight intensity={0.6} />

            <Physics>    
                <RigidBody type="fixed">
                <ProjectBuilding   />
                <Model />
                </RigidBody>
                <RigidBody 
                    
                    position={[ 1.5, 25, 0]} 
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
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                    <CuboidCollider mass={ 30 } args={ [0.5, 0.5, 0.5]} />
                </RigidBody>

            </Physics>
            <ProjectsText />
            <Background />
        </>
    );
}

// scale={active ? 1.5 : 1}