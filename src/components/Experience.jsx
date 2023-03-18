import { OrbitControls } from "@react-three/drei";
import {Perf} from 'r3f-perf'
import {useLoader, useFrame} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import React, { useState } from "react";



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
    console.log(model);

    useFrame(({clock}) => {
        const a = clock.getElapsedTime()/4
        if (!active) {
            myMesh.current.rotation.y = a
        }
    })
        

    return (
        <>
            <Perf position="top-left" />
            <OrbitControls makeDefault />

            <directionalLight castShadow position={[0, 10, 10]} intensity={1.5} />
            <ambientLight intensity={0.6} />

            <primitive object={model.scene} scale={active ? 1.5 : 1} onClick={() => setActive(!active)} ref={myMesh}/>
        </>
    );
}