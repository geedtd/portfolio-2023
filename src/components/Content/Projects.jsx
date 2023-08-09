import {BiLogoReact} from 'react-icons/bi'

export function Projects(props) {

    // let skillsArr = ['JavaScript', 'REST API Creation',  'React', 'threeJS', 'R3F', 'Project Management', ' Fluent in English and Spanish', 'TypeScript', 'Custom Hooks', 'Git/Version Control',  'Third Party API Integration', 'Python',  'Node.js',  'MongoDB', 'HTML', 'CSS', 'SQL', 'Express', 'Django',  'Docker', 'AWS'  , 'WebGL', 'Blender',
    // ]

    return(
        <>
            <div className="projects "   >
                    <h2 className="title" style={{textAlign: "center"}}>
                        Projects
                    </h2>
                    <div className="projects-container">
                    <div className="project" style={{margin: "10px"}}>
                        <img src="/customizationSite.png" alt="an img" />
                        <p className="siteNames">R3F Customization</p>
                        <a href="https://r3f-customizer.vercel.app/">
                            Website Link
                        </a>
                        <p style={{ textDecoration: "underline"}}>Technologies Used</p>
                        <img className='icons' src="/react.png" alt="react-icon" style={{height: "5%", width: "auto", objectFit: "contain"}} />
                    </div>
                    <div className="project" style={{margin: "10px"}}>
                        <img src="/customizationSite.png" alt="an img" />
                        <p className="siteNames">R3F Customization</p>
                    </div>
                    <div className="project" style={{margin: "10px"}}>
                        <img src="/customizationSite.png" alt="an img" />
                        <p className="siteNames">R3F Customization</p>
                    </div>
                    </div>
                    
                </div>
            
        </>
    )
}