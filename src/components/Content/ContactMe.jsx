import React from "react";
import { Canvas, extend } from '@react-three/fiber'
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import MailboxExperience from "../3DContent/MailboxExperience";


export function ContactMe(props) {

    return(
        <>
            <div className="contact-me glass-dark" >
                {/* left side */}
                <div className="text-canvas" > 
                    
                    <h2 className="title">
                        Contact Me 
                    </h2>
                    <p>
                        I am
                    </p>
                </div>
                <div className="contact-canvas" >
                <Canvas
                    shadows
                    flat 
                    style={{borderRadius: '20px'}}
                >
                    <PerspectiveCamera makeDefault  position={[-1, 1,-1]} maxPolarAngle={ Math.Pi * 0.5} />
                    {/* <Suspense fallback={<Loader/>}> */}
                    <MailboxExperience />
                </Canvas>
                </div>
            </div>
        </>
    )
}