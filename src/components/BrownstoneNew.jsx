/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BrownstoneNew(props) {
    const { nodes, materials } = useGLTF("/Brownstone5-23.glb");
    return (
        <group {...props} dispose={null}>
        <mesh
            geometry={nodes.Plane.geometry}
            material={nodes.Plane.material}
            position={[-1.31316948, 0, -1.40416682]}
        />
        <mesh
            geometry={nodes.Cube.geometry}
            material={materials.Crosswalk}
            position={[-3.46951151, 0.74829632, 0.86521029]}
            scale={[0.43403512, 0.14257991, 1.58628643]}
        />
        <mesh
            geometry={nodes.Mailbox.geometry}
            material={materials.Mailbox}
            position={[-3.34961843, 0.54351866, 3.03920221]}
            scale={0.18400162}
        />
        <mesh
            geometry={nodes.Curb_Corner.geometry}
            material={materials.Curb}
            position={[-1.31316948, 0, -1.40416682]}
        />
        <mesh
            geometry={nodes.Cube004.geometry}
            material={materials.Crosswalk}
            position={[0.09048843, 0.74829632, -1.9820199]}
            scale={[0.43403512, 0.14257991, 1.58628643]}
        />
        <mesh
            geometry={nodes.Cube002.geometry}
            material={materials.Crosswalk}
            position={[-4.75371027, 0.74829632, 0.86521029]}
            scale={[0.43403512, 0.14257991, 1.58628643]}
        />
        <mesh
            geometry={nodes.Cube001.geometry}
            material={materials.Crosswalk}
            position={[-4.11161089, 0.74829632, 0.86521029]}
            scale={[0.43403512, 0.14257991, 1.58628643]}
        />
        <mesh
            geometry={nodes.Cube007.geometry}
            material={materials.Crosswalk}
            position={[-1.83580971, 0.74829632, -1.9820199]}
            scale={[0.43403512, 0.14257991, 1.58628643]}
        />
        <mesh
            geometry={nodes.Cube005.geometry}
            material={materials.Crosswalk}
            position={[-0.55161095, 0.74829632, -1.9820199]}
            scale={[0.43403512, 0.14257991, 1.58628643]}
        />
        <mesh
            geometry={nodes.Cube003.geometry}
            material={materials.Crosswalk}
            position={[-5.39580965, 0.74829632, 0.86521029]}
            scale={[0.43403512, 0.14257991, 1.58628643]}
        />
        <mesh
            geometry={nodes.Cube008.geometry}
            material={nodes.Cube008.material}
            position={[-0.05495065, 7.23088217, 0.99858445]}
            rotation={[0, 0, -Math.PI]}
            scale={[1.53510857, 0.04347444, 1]}
        />
        <mesh
            geometry={nodes.Cube006.geometry}
            material={materials.Crosswalk}
            position={[-1.19371033, 0.74829632, -1.9820199]}
            scale={[0.43403512, 0.14257991, 1.58628643]}
        />
        <group position={[-2.98128057, 1.52641892, -1.48675871]} scale={1.5}>
            <mesh
            geometry={nodes.Cube001_1.geometry}
            material={materials.Material}
            />
            <mesh geometry={nodes.Cube001_2.geometry} material={materials.Glass} />
            <mesh
            geometry={nodes.Cube001_3.geometry}
            material={materials["Wood Floor"]}
            />
            <mesh geometry={nodes.Cube001_4.geometry} material={materials.Door} />
        </group>
        </group>
    );
}

useGLTF.preload("/Brownstone5-23.glb");