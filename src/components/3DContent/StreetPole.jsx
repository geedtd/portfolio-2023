/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Bloom, EffectComposer } from  "@react-three/postprocessing"
import * as THREE from 'three'

const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 0.5), toneMapped: false })


export function StreetPole(props) {
    const { nodes, materials } = useGLTF("/StreetPole.glb");

    const walk1 = useRef();
    const stop = useRef();
    const walk2 = useRef();
    const stop2 = useRef();
    
    return <>

        {/* <EffectComposer multisampling={0}>
            <Bloom 
                // mipmapBlur
                intensity={0.2}
            />
        </EffectComposer> */}

        <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Traffic_Pole.geometry}
            material={nodes.Traffic_Pole.material}
            position={[-2.17857885, 0.01859063, -4.91780329]}
            scale={[0.16456304, 0.03901931, 0.16456304]}
        />
        <mesh
            
            geometry={nodes.Traffic_Pole_Horizontal_Beam.geometry}
            material={nodes.Traffic_Pole_Horizontal_Beam.material}
            position={[-1.7189244, 4.20677662, -5.03170586]}
            rotation={[1.818912, 0.13850956, 0.00350786]}
            scale={0.08576083}
            color="red"
        />
        <group
            position={[-1.8453331, 3.28094697, -4.91780376]}
            rotation={[0, 0, -Math.PI]}
            scale={[0.0406568, 0.18038253, 0.03656848]}
        >
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials.Metal}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_1.geometry}
            material={materials["Green Metal"]}
            />
        </group>
        <group position={[-2, 2.88761663, -5.21161318]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials.Metal}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_1.geometry}
            material={materials["Green Metal"]}
            />
        </group>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Crossing_Signal.geometry}
            material={materials.Metal}
            position={[-1.71367621, 2.16488767, -5.31243992]}
            scale={0.24852459}
        />
        <mesh
        
            castShadow
            receiveShadow
            geometry={nodes.Text_200_OK.geometry}
            material={nodes.Text_200_OK.material}
            position={[-1.94712305, 3.19630909, -4.92874479]}
            rotation={[Math.PI / 2, 4e-8, -Math.PI]}
            scale={0.846026}
        /> 
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text_200_OK001.geometry}
            material={nodes.Text_200_OK001.material}
            position={[-2.69473529, 3.19630909, -4.90402985]}
            rotation={[Math.PI / 2, 0, -0.00651629]}
            scale={[0.84602606, 0.84602606, 0.846026]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={nodes.Cylinder.material}
            position={[-1.71635735, 2.30709386, -5.0270505]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.04347687}
        /> 
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Crossing_Signal001.geometry}
            material={materials.Metal}
            position={[-1.32919741, 2.66963959, -4.93532658]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.24852459}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={nodes.Cylinder001.material}
            position={[-1.61458683, 2.81184578, -4.93800783]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={0.04347687}
        />
        
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text_HTTP_Status.geometry}
            material={nodes.Text_HTTP_Status.material}
            position={[-1.77946866, 3.98586607, -7.97349739]}
            rotation={[Math.PI / 2, 3e-8, Math.PI / 2]}
            scale={0.86921263}
        />
        </group>
        </>
    ;
}

useGLTF.preload("/StreetPole.glb");
