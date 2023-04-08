
import './App.css'
import Experience from './components/Experience'
import Nav from './components/Nav'
import { ReactDOM } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Sky } from '@react-three/drei'
import { Suspense } from 'react'



function App() {
  

  return (
    <div className="App">
      <Canvas
        shadows
        flat 
      >
        <PerspectiveCamera makeDefault  position={[-40, 15,-7]} maxPolarAngle={ Math.Pi * 0.5} />
        {/* <Suspense fallback={<Loader/>}> */}
          <Experience  />
        {/* </Suspense> */}
        <Sky 
          distance={400}
          sunPosition={[ 5,25,8]}
          inclination={0}
          azimuth={0.55}
          
        />
      </Canvas>
      {/* <Nav /> */}
    </div>
  );
}

export default App
