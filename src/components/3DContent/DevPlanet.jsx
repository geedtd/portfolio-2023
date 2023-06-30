/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function DevPlanet(props) {

    const name = useRef()
    const roles = useRef()

    useFrame(({clock}) => {
        const time = clock.getElapsedTime()
        name.current.rotation.y = (time)/6
        name.current.position.x = Math.sin(time)/8
        roles.current.rotation.y = (time)/8
        // roles.current.position.x = Math.sin(time)/8
        
    })

    const { nodes, materials } = useGLTF("/DevPlanet.glb");
    return (
        <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={nodes.Sphere.material}
        />
        <mesh
            ref={name}

            castShadow
            receiveShadow
            geometry={nodes.Text.geometry}
            material={nodes.Text.material}
            rotation={[-2.9061, 0, 0]}
            scale={0.533}
        />
        <mesh
            ref={roles}
            castShadow
            receiveShadow
            geometry={nodes.Text001.geometry}
            material={nodes.Text001.material}
            rotation={[2.8, 0, 0]}
            scale={0.294}
        />
        </group>
    );
    }

useGLTF.preload("/DevPlanet.glb");
