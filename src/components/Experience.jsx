import { OrbitControls, Center } from "@react-three/drei";
import {Perf} from 'r3f-perf'
import {useLoader, useFrame} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import React, { useState } from "react";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Model } from "./Portfolio";



export default function Experience() {
    const myMesh = React.useRef()
    const [active, setActive] = useState(false)

    const model = useLoader(
        GLTFLoader,
        "./PortfolioBlock.glb",
        loader => {
            const dracoLoader = new DRACOLoader
            dracoLoader.setDecoderPath(
                "https://www.gstatic.com/draco/v1/decoders/"
            );
            loader.setDRACOLoader(dracoLoader)
        }
    );
    console.log(model.scenes[0].children[0].name);
    
    let fanBlade = model.scenes[0].children[0];
    let girasol = model.scenes[0].children[4]

    useFrame(({clock}) => {
        const a = clock.getElapsedTime()
        
            fanBlade.rotation.y = a * 3
            girasol.rotation.x = a *2
    })
    
    return (
        <>
            <Perf position="top-left" />
            <OrbitControls makeDefault />

            <directionalLight castShadow position={[0, 10, 10]} intensity={1.5} />
            <ambientLight intensity={0.6} />


            <Physics>    
                <RigidBody type="fixed">

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
                {/* <RigidBody 
                    
                    position={[ 1.5, 2, 0]} 
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

                <Center>
                    
                    <primitive object={model.scene}  onClick={() => setActive(!active)} ref={myMesh}/>
                </Center> */}
            </Physics>
        </>
    );
}

// scale={active ? 1.5 : 1}