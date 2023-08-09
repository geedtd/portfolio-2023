import React from "react";
import { Canvas, extend } from '@react-three/fiber'
import LandingExperience from "../3DContent/LandingExperience";
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import LandingTemp from "../3DContent/LandingTemp";
import { AboutMeSign } from "../3DContent/AboutMeSign";


export function AboutMe(props) {

    return(
        <>
            <div className="about-me glass-dark" >
                <div  style={{ flex: 1, }}>
                    <h1 className="title">
                        About Me 
                    </h1>
                    <p>
                    Hello! I'm Gerardo Cazares, a passionate web developer with a knack for incorporating captivating 3D elements into web design. With a background in hospitality and a strong curiosity to uncover how things work, I bring a unique perspective to my development projects.
                    </p>
                    <p>
                    My love for blending technology and creativity led me to explore the world of 3D elements in web design. By seamlessly integrating these elements into the digital realm, I aim to bring a sense of depth, interactivity, and immersion to websites, providing users with an unforgettable online experience.
                    </p>
                    <p>
                    If you're looking for a web developer who can bring your ideas to life, create immersive experiences, and deliver exceptional results, I would love to collaborate with you. Let's work together to build a better web presence that stands out, fosters engagement, and captivates your audience.
                    </p>
                </div>

                
            </div>
        </>
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