
import './App.css'
import Experience from './components/Experience'
import Nav from './components/Nav'
import { ReactDOM } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'


function App() {
  

  return (
    <div className="App">
      <Canvas
        shadows
        camera={
          {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-30, 15, -7],
          }
          //change camera position based on state within Nav passed up, if not possible look into implementing solution with wouter
        }
      >
        <Experience  />
      </Canvas>
      <Nav />
    </div>
  );
}

export default App
