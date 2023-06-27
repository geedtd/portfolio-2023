import React from "react";
import { Canvas, extend } from '@react-three/fiber'
// import LandingExperience from "../3DContent/LandingExperience";
import GerardoText from "../3DContent/GerardoText";
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import LandingTemp from "../3DContent/LandingTemp";
import LandingExperience from "../3DContent/LandingExperience";

import Typewriter from 'typewriter-effect';

export function Landing(props) {

    let typeContent = ['Web Developer', 'Creative Developer',]

    return(
        <>
            
            <div className="landing glass" >
                <div className="left-landing" >
                <Canvas
                    shadows
                    flat 
                    style={{borderRadius: '20px'}}
                >
                    {/* <PerspectiveCamera makeDefault  position={[-3, 2,-1]} maxPolarAngle={ Math.Pi * 0.5} /> */}
                    {/* <Suspense fallback={<Loader/>}> */}
                    <LandingExperience />
                </Canvas>
                </div>
                <div className="right-landing" >
                    <h2 className="title">
                        Hey thanks for checking me out! <br /> I am a ... 
                    </h2>
                    
                    <Typewriter
                        options={{
                            strings: ['Software Engineer','Web Developer', 'Creative Developer', 'Cat Dad', 'Full-Stack Developer' ],
                            autoStart: true,
                            loop: true,
                            pauseFor: 2500,
                            wrapperClassName: 'typewriter',
                            cursor: '',
                            cursorClassName: 'typewriter-cursor',
                            
                        }}
                    />
                </div>
            </div>
        </>
    )
}