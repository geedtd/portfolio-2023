import { useEffect, useState } from "react";
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

function Nav() {
    const [nav, setNav] = useState(0)
    const vec = new THREE.Vector3()



    return (
        <div className="floating-nav">
            <button className="btn side-button left" onClick={() => setNav(nav - 1)}>
            {"<"}
            </button>

            <button className="btn middle-button">NAVIGATION</button>
            
            <button 
            className="btn side-button right" 
            onClick={() => setNav(nav+1)}>
            {">"}
            </button>
        </div>
    );
}

export default Nav
