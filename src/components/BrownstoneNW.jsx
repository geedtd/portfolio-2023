/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BrownstoneNW(props) {
  const { nodes, materials } = useGLTF("/PortfolioBrownstoneNoWindows.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Frame_Window_Skinny_2-2"].geometry}
        material={nodes["Frame_Window_Skinny_2-2"].material}
        position={[-3.97816133, 1.81487918, -0.05916079]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Frame_Window_Skinny_2-1"].geometry}
        material={nodes["Frame_Window_Skinny_2-1"].material}
        position={[-2.98128057, 1.81487918, -0.05916079]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Frame_Window_Skinny_2-3"].geometry}
        material={nodes["Frame_Window_Skinny_2-3"].material}
        position={[-4.97504187, 1.81487918, -0.05916079]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Windows_Wide_2_Eastside.geometry}
        material={nodes.Frame_Windows_Wide_2_Eastside.material}
        position={[-4.97504187, 1.79031968, -1.06895149]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Windows_WIde_2_Westside.geometry}
        material={nodes.Frame_Windows_WIde_2_Westside.material}
        position={[-4.97504187, 1.79031968, -1.06895149]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Window_Skinny_1_Front.geometry}
        material={nodes.Frame_Window_Skinny_1_Front.material}
        position={[-2.98128057, -0.40516567, -0.05916079]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Window_Skinny_Southside_lvl_2_SS.geometry}
        material={nodes.Frame_Window_Skinny_Southside_lvl_2_SS.material}
        position={[-2.98128057, 1.79031968, -0.9086864]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Windows_Wide__1_Eastside.geometry}
        material={nodes.Frame_Windows_Wide__1_Eastside.material}
        position={[-4.97504187, 1.81958365, -1.06895149]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Frame_Window_Skinny_2-2001"].geometry}
        material={nodes["Frame_Window_Skinny_2-2001"].material}
        position={[-3.97816133, 1.79031968, -0.9086864]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Window_Skinny_1_Back.geometry}
        material={nodes.Frame_Window_Skinny_1_Back.material}
        position={[-2.98128057, -0.42866445, -0.05916079]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["FrameWindow_Skinny_2-3001"].geometry}
        material={nodes["FrameWindow_Skinny_2-3001"].material}
        position={[-4.97504187, 1.79031968, -0.9086864]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Windows_2_Eastside_Penthouse.geometry}
        material={nodes.Frame_Windows_2_Eastside_Penthouse.material}
        position={[-4.9752264, 1.81246686, -1.06913412]}
        scale={[1.5, 1.50169897, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Windows_Wide__1_Westside.geometry}
        material={nodes.Frame_Windows_Wide__1_Westside.material}
        position={[3.77715731, 1.81560552, 0.29703289]}
        rotation={[-Math.PI, 1.5e-7, -Math.PI]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Windows_Wide_2_Westside.geometry}
        material={nodes.Frame_Windows_Wide_2_Westside.material}
        position={[-4.97504187, 1.79031968, -1.06895149]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-1.31316948, 0, -1.40416682]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building.geometry}
        material={nodes.Building.material}
        position={[-2.98128057, 1.52641892, -1.48675871]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curb_Corner.geometry}
        material={nodes.Curb_Corner.material}
        position={[-1.31316948, 0, -1.40416682]}
      />
      <group
        position={[-3.34961843, 0.54351866, 3.03920221]}
        scale={0.18400162}
        >
      <mesh
        
        geometry={nodes.Mailbox.geometry}
        // material={nodes.Mailbox.material}
      >
        <meshPhysicalMaterial 
                    color="skyblue"
                    transmission={1}
                    thickness={0.5}
                    roughness={0}
                    // envMapIntensity={2}
                    // clearcoat={1}
                />
      </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Windows_Penthouse_Front.geometry}
        material={nodes.Frame_Windows_Penthouse_Front.material}
        position={[-2.98128057, 1.5, -1.48675871]}
        scale={1.5}
      />
    </group>
  );
}

useGLTF.preload("/PortfolioBrownstoneNoWindows.glb");