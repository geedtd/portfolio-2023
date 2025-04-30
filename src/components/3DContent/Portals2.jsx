import {
    CameraControls,
    Environment,
    MeshPortalMaterial,
    RoundedBox,
    Text,
    useCursor,
    useTexture,
} from "@react-three/drei";

import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";



export const Portals2 = () => {
    const [active, setActive] = useState(null);
    const [hovered, setHovered] = useState(null);
    useCursor(hovered);
    const controlsRef = useRef();
    const scene = useThree((state) => state.scene);

    useEffect(() => {
        if (active) {
        const targetPosition = new THREE.Vector3();
        scene.getObjectByName(active).getWorldPosition(targetPosition);
        controlsRef.current.setLookAt(
            0,
            0,
            5,
            targetPosition.x,
            targetPosition.y,
            targetPosition.z,
            true
            );
        } else {
            controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
        }
        }, [active]);
    
        return (
        <>
            <ambientLight intensity={0.5} />
            <Environment preset="sunset" />
            <CameraControls
            ref={controlsRef}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 6}

            />
        <ProjectStage
            
            name="BrownStone"
            color="#38adcf"
            active={active}
            setActive={setActive}
            hovered={hovered}
            setHovered={setHovered}
        >
        </ProjectStage>
        <ProjectStage
          
          name="Desk Setup"
          color={"#df8d52"}
          position-x={-10.5}
          rotation-y={Math.PI / 8}
          active={active}
          setActive={setActive}
          hovered={hovered}
          setHovered={setHovered}
        >
          
        </ProjectStage>
        <ProjectStage
          name={`Brake\nTutorial`}
          color="red"
          
          position-x={10.5}
          rotation-y={-Math.PI / 8}
          active={active}
          setActive={setActive}
          hovered={hovered}
          setHovered={setHovered}
        >
         
        </ProjectStage>
      </>
    );
  };
  
    const ProjectStage = ({
        children,
        texture,
        name,
        color,
        active,
        setActive,
        hovered,
        setHovered,
        ...props
    }) => {
        // const map = useTexture(texture);
        const portalMaterial = useRef();
    
        useFrame((_state, delta) => {
        const worldOpen = active === name;
        easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
        });
    
        return (
        <group {...props} scale={4}>
            <Text
            font="fonts/Caprasimo-Regular.ttf"
            fontSize={0.3}
            position={[0, -1.3, 0.051]}
            anchorY={"bottom"}
            >
            {name}
            <meshBasicMaterial color={color} toneMapped={false} />
            </Text>
            <RoundedBox
            name={name}
            args={[2, 3, 0.1]}
            onDoubleClick={() => setActive(active === name ? null : name)}
            onPointerEnter={() => setHovered(name)}
            onPointerLeave={() => setHovered(null)}
            >
            <MeshPortalMaterial ref={portalMaterial} >
                <ambientLight intensity={1} />
                <Environment preset="sunset" />
                {children}
                <mesh>
                <sphereGeometry args={[5, 64, 64]} />
                <meshStandardMaterial side={THREE.BackSide} />
                </mesh>
            </MeshPortalMaterial>
            </RoundedBox>
        </group>
        );
    };