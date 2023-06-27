import React from "react";
import {FaBeer} from 'react-icons/fa'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BsLinkedin, BsGithub, BsFillFileTextFill} from 'react-icons/bs'
import {FcDocument} from 'react-icons/fc'
import { Canvas, extend } from '@react-three/fiber'
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import MailboxExperience from "../3DContent/MailboxExperience";


export function ContactMe(props) {

    return(
        <>
            <div className="contact-me glass-dark" >
                {/* left side */}
                <div className="contact-text" > 
                    <h2 className="title">
                        Contact Me 
                    </h2>
                    <a href="https://www.linkedin.com/in/gerardocazares/">
                        <h2>
                            LinkedIn <BsLinkedin />
                        </h2>
                    </a>
                    <a href="https://github.com/geedtd">
                        <h2>
                            Github  <BsGithub />
                        </h2>
                    </a>
                    <a href="https://docs.google.com/document/d/1bY3mQmCUnC34dEAiCSbyKI93_ljXF2W5AX9yLOZ7S-Q/edit?usp=sharing">
                        <h2>
                            Resume <BsFillFileTextFill />
                        </h2>
                    </a>

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