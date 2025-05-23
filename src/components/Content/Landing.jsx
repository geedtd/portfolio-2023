import React from "react";
import { Canvas, extend } from '@react-three/fiber'
import LandingExperience from "../3DContent/LandingExperience";
import LandingPLanet from '../3DContent/LandingPlanet'

import Typewriter from 'typewriter-effect';

export function Landing(props) {


    let gravity = 0
    return(
        <>
            
            <div className="landing clear" >
                <div className="left-landing" >
                <Canvas
                    shadows
                    flat 
                    style={{borderRadius: '20px', pointerEvents: 'none'}}
                    className="canvas-name"
                >
                    <LandingPLanet props={gravity}/>
                </Canvas>
                </div>
                {/* <div className="right-landing" >
                    <h2 className="title">
                        Welcome to my Portfolio  <br /> I am a ... 
                    </h2>
                    
                    <Typewriter
                        options={{
                            strings: ['Software Engineer','Web Developer', 'Creative Developer', 'Cat Dad', 'Full-Stack Developer', 'Lifelong Learner' ],
                            autoStart: true,
                            loop: true,
                            pauseFor: 2500,
                            deleteSpeed: 100,
                            wrapperClassName: 'typewriter',
                            cursor: '',
                            cursorClassName: 'typewriter-cursor',
                            
                        }}
                    />
                </div> */}
            </div>
        </>
    )
}