
import './App.css'
import { Canvas, extend } from '@react-three/fiber'
import Experience from './components/3DContent/Experience'
import Nav from './components/3DContent/Nav'
import { ReactDOM } from 'react-dom/client'
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
extend ({UnrealBloomPass})
import { AboutMe } from './components/Content/AboutMe'
import { Suspense } from 'react'
import { Work } from './components/Content/Work'
import { ContactMe } from './components/Content/ContactMe'



function App() {
  

  return (
    <div className="App">
      <div className="canvas" style={{height: '70vh', width: '100vw'}}>
        <Canvas
          shadows
          flat 
          
        >
          <PerspectiveCamera makeDefault  position={[-29, 18,-12]} maxPolarAngle={ Math.Pi * 0.5} />
          {/* <Suspense fallback={<Loader/>}> */}
            <Experience  />
          {/* </Suspense> */}
          {/* <Effects disableGamma>
            <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
          </Effects> */}
        </Canvas>
      </div>

        <AboutMe style={{display: 'flex', justifyContent: 'center',}}/>
        <Work />
        <ContactMe />
        
        
    </div>

  );
}

export default App
