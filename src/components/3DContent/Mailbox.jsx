/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mailbox(props) {
    const { nodes, materials } = useGLTF("/Brownstone5-23.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Mailbox.geometry}
                material={materials.Mailbox}
                position={[-3.34961843, 0.54351866, 3.03920221]}
                
                scale={0.18400162}
            />
        </group>
    );
}

useGLTF.preload("/Brownstone5-23.glb");
