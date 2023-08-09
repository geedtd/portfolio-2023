import { OrbitControls, Center,Environment, PresentationControls, Float, ContactShadows } from "@react-three/drei";
import { Mailbox } from "./Mailbox";
import { Buzon } from "./Buzon";

export default function MailboxExperience() {
    
    return (
        <>
            <Environment files="potsdamer_platz_1k.hdr" />

            {/* <OrbitControls 
                makeDefault
                maxPolarAngle={Math.PI * 0.5}
                autoRotate= { false }
                
            />             */}
            <PresentationControls
                // polar={ [ - 0.4, 0.2 ] }
                // azimuth={ [ - 1, 0.75 ] }
                config={ { mass: 2, tension: 400 } }
                snap={ { mass: 4, tension: 400 } }
            >
                <Float floatIntensity={0.7}>
                    <Buzon />
                </Float>
            </PresentationControls>
            
            <ContactShadows 
                position-y={-2.7} 
                opacity={0.5}
                scale={4}
            />
            
        </>
    );
}
