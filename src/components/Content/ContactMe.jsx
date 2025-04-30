import {BsLinkedin, BsGithub, BsFillFileTextFill} from 'react-icons/bs'
import { Canvas, extend } from '@react-three/fiber'
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import MailboxExperience from "../3DContent/MailboxExperience";
import { Buzon } from '../3DContent/Buzon';


export function ContactMe(props) {

    return(
        <>
            <div className="contact-me " >
                {/* left side */}
                <div className="contact-text" > 
                    {/* <h2 className="title">
                        Links 
                    </h2> */}
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
                    <a href="https://docs.google.com/document/d/1r9fsGwWubKrv1yLcoQFUiwS8nW5x0tCRdD4gHTQPQg8/edit?usp=sharing">
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
                    {/* <PerspectiveCamera makeDefault  position={[0, 0.5, 4]} maxPolarAngle={ Math.Pi * 0.5} /> */}
                    {/* <Suspense fallback={<Loader/>}> */}
                    <MailboxExperience />
                    {/* <Buzon /> */}
                </Canvas>
                </div>
            </div>
        </>
    )
}