import React from "react";
import { Canvas, extend } from '@react-three/fiber'
import LandingExperience from "../3DContent/LandingExperience";
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import MailboxExperience from "../3DContent/MailboxExperience";


export function ContactMe(props) {

    return(
        <>
            <div className="contact-me glass" >
                <div className="left-side" style={{ flex: 1, }}>
                    
                    <h1 className="title">
                        Contact Me 
                    </h1>
                    <p>
                        I am
                    </p>
                </div>
                <div className="right-side" style={{position: 'relative', top: '3vh', left: '3vw', borderRadius: '20px', flex: 1, padding: '10px', }}>
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