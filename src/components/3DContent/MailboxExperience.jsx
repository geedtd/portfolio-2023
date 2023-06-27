import { OrbitControls, Center,Environment } from "@react-three/drei";
import { Mailbox } from "./Mailbox";
import React from "react";

export default function MailboxExperience() {
    
    return (
        <>
            <Environment files="potsdamer_platz_1k.hdr" />
            <OrbitControls 
                makeDefault
                maxPolarAngle={Math.PI * 0.5}
                autoRotate= { false }
            />            
            <Center>
                <Mailbox />
            </Center>
        </>
    );
}
