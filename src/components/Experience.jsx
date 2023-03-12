import { OrbitControls } from "@react-three/drei";

export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault/>

        <directionalLight castShadow position={[1,2,3]} intensity={ 1.5 } />
        <ambientLight intensity={0.6}
    </>
}