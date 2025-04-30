import React from "react";
import { Canvas, extend } from '@react-three/fiber'
import LandingExperience from "../3DContent/LandingExperience";
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import LandingTemp from "../3DContent/LandingTemp";
import { AboutMeSign } from "../3DContent/AboutMeSign";


export function AboutMe(props) {

    return(
    
            <div className="about-me " id="about-me">
                <div  style={{ flex: 1, }}>
                    <h1 className="title">
                        About Me 
                    </h1>
                    <p>
                    Creative and detail-oriented Frontend Developer with extensive experience delivering high-impact web experiences for global audiences. I contributed to the multi-locale relaunch of the Google App website, enhancing user engagement across seven international markets and earning a 2024 Webby Award nomination. I also led frontend development on website refreshes for Amazon Prime projects, including Thursday Night Football (TNF) and UEFA on Prime for Europe, optimizing performance and launching new features for platforms reaching millions of users. Additionally, I spearheaded maintenance and content updates for the Amazon Bloomberg Green Festival 2024 website, supporting over 13,000 attendees during a high-profile event. These are just a few highlights from my broader body of work building scalable, accessible, and user-centered digital experiences.
                    </p>
                </div>

                
            </div>
        
    )
}


{/* <div className="right-side" style={{display: 'flex', justifyContent: 'center', borderRadius: '20px', flex: 1, padding: '10px', boxShadow: '0 8px 8px -4px black'}}>
                    <Canvas
                        shadows
                        flat 
                        style={{borderRadius: '20px'}}
                    >
                        <PerspectiveCamera makeDefault  position={[-2, 2,-1]} maxPolarAngle={ Math.Pi * 0.5} />
                        <LandingTemp />
                    </Canvas>
                </div> */}
//style={{ width: '80vw'}}