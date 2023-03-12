import { OrbitControls } from "@react-three/drei";
import {Perf} from 'r3f-perf'
import {useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";


export default function Experience() {
        // const dracoLoader = new DRACOLoader()
        // dracoLoader.setDecoderConfig({type: 'js'})
        // dracoLoader.setDecoderPath(
        //     "https://www.gstatic.com/draco/v1/decoders/"
        // );
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

    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault/>

        <directionalLight castShadow position={[1,2,3]} intensity={ 1.5 } />
        <ambientLight intensity={0.6}/>

        <mesh receiveShadow position-y={ -1 } rotation-x={ - Math.PI * 0.5} scale={ 10 }>
            <planeGeometry/>
            <meshStandardMaterial color='greenyellow' />
        </mesh>

        <primitive object={model.scene} />
    </>
}