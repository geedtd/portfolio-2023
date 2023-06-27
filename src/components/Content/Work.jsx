import React from "react";
import { Canvas, extend } from '@react-three/fiber';
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import WorkExperience from "../3DContent/WorkExperience";


export function Work(props) {

    let skillsArr = ['JavaScript', 'REST API Creation',  'React', 'threeJS', 'R3F', 'Project Management', ' Fluent in English and Spanish', 'TypeScript', 'Custom Hooks', 'Git/Version Control',  'Third Party API Integration', 'Python',  'Node.js',  'MongoDB', 'HTML', 'CSS', 'SQL', 'Express', 'Django',  'Docker', 'AWS'  , 'WebGL', 'Blender',
    ]

    return(
        <>
            <div className="skills "   >
                <div className="skills-canvas" style={{  borderRadius: '20px',  padding: '10px'}}>
                    <Canvas
                        shadows
                        flat 
                        style={{borderRadius: '20px'}}
                    >
                        {/* <PerspectiveCamera makeDefault  position={[-2, 2,-1]} maxPolarAngle={ Math.Pi * 0.5} /> */}
                            <WorkExperience />
                    </Canvas>
                </div>
                <div className="skills-text glass-dark" >
                    <h2 className="title">
                        Skills
                    </h2>
                    <ul className="skill-list">
                        {skillsArr.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    
                </div>
            </div>
        </>
    )
}