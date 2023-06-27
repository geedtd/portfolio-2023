import { OrbitControls, Center,Environment } from "@react-three/drei";
import { StreetPole } from "./StreetPole";
import { WalkSignsYang } from "./WalkSignsYang";
import React from "react";

export default function WorkExperience() {
    
    return (
        <>
            <Environment files="potsdamer_platz_1k.hdr" />
            <OrbitControls 
                makeDefault
                maxPolarAngle={Math.PI * 0.5}
                autoRotate= { false }
            />            
            <Center>
                <StreetPole />
                <WalkSignsYang />
            </Center>
        </>
    );
}
