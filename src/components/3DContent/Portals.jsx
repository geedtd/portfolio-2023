import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { easing, geometry } from 'maath';
import { suspend } from 'suspend-react'
import { useRoute, useLocation } from 'wouter';
import { useCursor, Text, MeshPortalMaterial, CameraControls } from '@react-three/drei';

extend(geometry)

export const Portals = () => {
    <Canvas camera={{ fov: 70, position: [ 0, 0, 15 ]}} eventSource={document.getElementById('root')} eventPrefix="client" >
        <Frame id='1' name={`brake\ntutorial`} bg="f0f0f0" position={[-1.2, 0, 0]} rotation={[0, 0.5, 0]}>
            
        </Frame>
    </Canvas>
}

function Frame({ id, name, bg, width = 1, height = 1.75, children, ...props }) {
    const portal = useRef()
    const [, setLocation] = useLocation()
    const [, params] = useRoute('/item/:id')
    const [hovered, hover] = useState(false)
    useCursor(hovered)
    useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
    return (
        <group {...props}>
            <Text font={suspend(medium).default} fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
            {name}
            </Text>
            {/* <Text font={suspend(regular).default} fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
            /{id}
            </Text> */}
            <mesh name={id} onDoubleClick={(e) => (e.stopPropagation(), setLocation('/item/' + e.object.name))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
            <roundedPlaneGeometry args={[width, height, 0.1]} />
            <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
                <color attach="background" args={[bg]} />
                {children}
            </MeshPortalMaterial>
            </mesh>
        </group>
        )
    }
    



function CameraRig({ position = new THREE.Vector3(0,0,2), focus = new THREE.Vector3(0,0,0) }) {
    const { controls, scene } = useThree()
    const [ , params ] = useRoute('/item/:id')
    useEffect(() => {
        const active = scene.getObjectByName(params?.id)
        if (active) {
            active.parent.localToWorld(position.set(0,0.75,0.3))
            active.parent.localToWorld(focus.set(0,0,-1.5))
        }
        controls?.setLookAt(...position.toArray(), true)
    })
    return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle = {Math.PI / 2} />
}