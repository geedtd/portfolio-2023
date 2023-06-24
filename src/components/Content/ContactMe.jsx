import React from "react";
import { Canvas, extend } from '@react-three/fiber'
import LandingExperience from "../3DContent/LandingExperience";
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'


export function ContactMe(props) {

    return(
        <>
            <div className="contact-me" style={{  display: 'flex', maxWidth: '90vw', minHeight: '40vh', background: 'white', color: 'black',  margin: '2vh auto', borderRadius: '20px'}}>
                <div className="left-side" style={{ flex: 1, }}>
                    <h2 className="title">
                        Contact Me Testing Component
                    </h2>
                    <p>
                        I am
                    </p>
                </div>
                <div className="right-side" style={{display: 'flex', justifyContent: 'center', borderRadius: '20px', flex: 1, padding: '10px', boxShadow: '0 8px 8px -4px black'}}>
                <Canvas
                    shadows
                    flat 
                    style={{borderRadius: '20px'}}

                >
                    <PerspectiveCamera makeDefault  position={[-2, 2,-1]} maxPolarAngle={ Math.Pi * 0.5} />
                    {/* <Suspense fallback={<Loader/>}> */}
                        <LandingExperience />
                </Canvas>
                </div>
            </div>
        </>
    )
}