import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function AboutMeSign(props) {
    const { nodes, materials } = useGLTF("/PortfolioBlock.glb");


    return (

<group 
    position={[ -2.3, 5.5, -1]} 
    scale={0.5}
    rotation={[0,Math.PI * 1.5,0]}
    >
        <mesh
        geometry={nodes.About_Me_Sign_Border.geometry}
        material={materials["Sign Color"]}
        />
        <mesh
        geometry={nodes.About_Me_Sign_Border_1.geometry}
        material={materials["Material.003"]}
        />
        <mesh
        geometry={nodes.About_Me.geometry}
        material={nodes.About_Me.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.6, 0.29, 0.6]}
        />
    </group>

);
}

useGLTF.preload("/PortfolioBlock.glb");