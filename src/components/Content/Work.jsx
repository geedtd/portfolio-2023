import React from "react";
import { Canvas, extend } from '@react-three/fiber';
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import WorkExperience from "../3DContent/WorkExperience";


export function Work(props) {

    let skillsArr = ['JavaScript', 'Python', 'React', 'threeJS', 'R3F', 'WebGL', 'Blender', 'TypeScript', 'Custom Hooks', 'Git/Version Control', 'Node.js',  'MongoDB', 'HTML', 'CSS', 'SQL', 'Express', 'Django', 'REST API Creation', 'Third Party API Integration', 'Docker', 'AWS'  ,
    'Project Management', ' Fluent in English and Spanish'
    ]

    return(
        <>
            <div className="skills glass-dark "   >
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
                <div className="skills-text" >
                    <h2 className="title">
                        Skills
                    </h2>
                    <ul className="skill-list">
                        {skillsArr.map((skill, index) => {
                            <li key={index}>{skill}</li>
                        })}
                    </ul>
                    <li>
                        React
                    </li>
                </div>
            </div>
        </>
    )
}