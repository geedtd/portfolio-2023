
import './App.css'
import Experience from './components/3DContent/Experience'
import Nav from './components/3DContent/Nav'
import { ReactDOM } from 'react-dom/client'
import { Canvas, extend } from '@react-three/fiber'
import { PerspectiveCamera, Sky, Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
extend ({UnrealBloomPass})
import { Suspense } from 'react'



function App() {
  

  return (
    <div className="App">
      <Canvas
        shadows
        flat 
      >
        <PerspectiveCamera makeDefault  position={[-49, 28,-12]} maxPolarAngle={ Math.Pi * 0.5} />
        {/* <Suspense fallback={<Loader/>}> */}
          <Experience  />
        {/* </Suspense> */}
        {/* <Effects disableGamma>
          <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
        </Effects> */}
      </Canvas>
      <div>
        Hello
      </div>
    </div>
    
  );
}

export default App
