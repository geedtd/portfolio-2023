/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function NewBuilding (props) {
  const { nodes, materials } = useGLTF("/PortfolioBrownstone.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building.geometry}
        material={nodes.Building.material}
        position={[-2.98, 1.53, -1.49]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Window_Skinny_2-3"].geometry}
        material={nodes["Window_Skinny_2-3"].material}
        position={[-4.98, 1.79, -0.06]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Window_Skinny_2-1"].geometry}
        material={nodes["Window_Skinny_2-1"].material}
        position={[-2.98, 1.79, -0.06]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Skinny_1_Front.geometry}
        material={nodes.Window_Skinny_1_Front.material}
        position={[-2.98, -0.43, -0.06]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Windows_WIde_2_Westside.geometry}
        material={nodes.Windows_WIde_2_Westside.material}
        position={[-4.98, 1.79, -1.07]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Window_Skinny_2-2"].geometry}
        material={nodes["Window_Skinny_2-2"].material}
        position={[-3.98, 1.79, -0.06]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Windows_Wide__1_Eastside.geometry}
        material={nodes.Windows_Wide__1_Eastside.material}
        position={[-4.98, 1.79, -1.07]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Skinny_1_Back.geometry}
        material={nodes.Window_Skinny_1_Back.material}
        position={[-2.98, -0.43, -0.06]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Window_Skinny_2-3001"].geometry}
        material={nodes["Window_Skinny_2-3001"].material}
        position={[-4.98, 1.79, -0.91]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Windows_Wide_2_Eastside.geometry}
        material={nodes.Windows_Wide_2_Eastside.material}
        position={[-4.98, 1.79, -1.07]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Window_Skinny_2-1001"].geometry}
        material={nodes["Window_Skinny_2-1001"].material}
        position={[-2.98, 1.79, -0.91]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Windows_Wide__1_Westside.geometry}
        material={nodes.Windows_Wide__1_Westside.material}
        position={[3.78, 1.79, 0.3]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Windows_Wide_2_Eastside002.geometry}
        material={nodes.Windows_Wide_2_Eastside002.material}
        position={[-4.98, 1.79, -1.07]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Window_Skinny_2-2001"].geometry}
        material={nodes["Window_Skinny_2-2001"].material}
        position={[-3.98, 1.79, -0.91]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curb_Corner.geometry}
        material={nodes.Curb_Corner.material}
        position={[-1.31, 0, -1.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Windows_Wide_2_Eastside001.geometry}
        material={nodes.Windows_Wide_2_Eastside001.material}
        position={[-4.98, 1.79, -1.07]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-1.31, 0, -1.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building001.geometry}
        material={nodes.Building001.material}
        position={[-2.98, 1.5, -1.49]}
        scale={1.5}
      />
    </group>
  );
}

useGLTF.preload("/PortfolioBrownstone.glb");
