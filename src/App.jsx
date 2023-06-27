
import './App.css'
import { Canvas, extend } from '@react-three/fiber'
import { ReactDOM } from 'react-dom/client'
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import { AboutMe } from './components/Content/AboutMe'
import LandingExperience from './components/3DContent/LandingExperience'
import { Work } from './components/Content/Work'
import { ContactMe } from './components/Content/ContactMe'
import { Footer } from './components/Content/Footer'
// import { Suspense } from 'react'
// import { UnrealBloomPass } from 'three-stdlib'
// extend ({UnrealBloomPass})
import BackgroundLeva from './components/3DContent/BackgroundLeva'
import { Landing } from './components/Content/Landing'
// import Nav from './components/3DContent/Nav'
// import LandingTemp from './components/3DContent/LandingTemp'
// import Experience from './components/3DContent/Experience'



function App() {
  

  return (
    <div className="App">
        <div className="canvas-bg" >
          <Canvas
            shadows
            flat 
            
          >
            <PerspectiveCamera makeDefault  position={[-5, -3,-5]} maxPolarAngle={ Math.Pi * 0.5} />
            {/* <Suspense fallback={<Loader/>}> */}
              <BackgroundLeva />
            {/* </Suspense> */}
            {/* <Effects disableGamma>
              <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
            </Effects> */}
          </Canvas>
        </div>
      <div className="landing">        
        <Landing />
      </div>
      <div className='content'>
        <AboutMe style={{display: 'flex', justifyContent: 'center',}}/>
        <Work className='glass'/>
        <ContactMe />
        <Footer />
      </div>

        
        
    </div>

  );
}

export default App
