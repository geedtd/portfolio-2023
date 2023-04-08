import { OrbitControls, Center } from "@react-three/drei";
import {Perf} from 'r3f-perf'
import {useLoader, useFrame} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import React, { useState } from "react";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Model } from "./Portfolio";
import { ProjectBuilding} from "./ProjectBuilding"
import ProjectsText from "./ProjectsText";



export default function Experience() {
    const myMesh = React.useRef()
    const [active, setActive] = useState(false)

    
    
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
                >
                    <mesh castShadow >
                        <boxGeometry />
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                    <CuboidCollider mass={ 3 } args={ [0.5, 0.5, 0.5]} />
                </RigidBody>
            </Physics>
            <ProjectsText />
        </>
    );
}

// scale={active ? 1.5 : 1}