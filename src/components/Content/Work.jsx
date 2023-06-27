import React from "react";
import { Canvas, extend } from '@react-three/fiber';
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import WorkExperience from "../3DContent/WorkExperience";


export function Work(props) {

    return(
        <>
            <div className="glass work"   >
                <div className="right-side" style={{position: 'relative', top: '-3vh', left: '3vw', justifyContent: 'center', borderRadius: '20px', flex: 1, padding: '10px', boxShadow: '0 8px 8px -4px black'}}>
                    <Canvas
                        shadows
                        flat 
                        style={{borderRadius: '20px'}}
                    >
                        <PerspectiveCamera makeDefault  position={[-2, 2,-1]} maxPolarAngle={ Math.Pi * 0.5} />
                            <WorkExperience />
                    </Canvas>
                </div>
                <div className="left-side" style={{ flex: 1, }}>
                    <h2 className="title">
                        Work Testing Component
                    </h2>
                    <p>
                        I am
                    </p>
                </div>
            </div>
        </>
    )
}