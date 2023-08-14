import { OrbitControls, Center,Environment, PresentationControls, Float, ContactShadows, Text, Html } from "@react-three/drei";
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
                    <Text
                        font="/Bangers-Regular.ttf"
                        position={[0,1,2.6]}
                        scale={0.65}
                    >
                        Let's Connect
                    </Text>
                    {/* <Html
                        transform
                        occlude
                        scale={0.125}
                        position={[0,0,1.9]}
                        rotation={[0.4, -0.5, 0]}
                        // distanceFactor={7}
                    >
                        <img className='icons' src="/react.png" alt="react-icon" style={{height: "5%", width: "auto", objectFit: "contain"}} />
                    </Html> */}
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
