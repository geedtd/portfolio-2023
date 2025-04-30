import React, {useState, useEffect} from 'react'
import ScrollToTopButton from '../Functionality/ScrollToTop'

export function Nav(props) {

    return(
        
            <div className='nav-elements'>
                <div className='nav-left'>
                    <h1>Gerardo Cazares</h1>
                    <h2 className='display-small'>Frontend Developer</h2>
                </div>
                <div className='nav-right'>
                <h2 style={{ cursor: 'pointer' }}>
                    <a href="#about-me" style={{ textDecoration: 'none', color: 'inherit' }}>
                        About Me
                    </a>
                </h2>
                <h2 style={{ cursor: 'pointer' }}>
                    <a href="#work" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Featured Work
                    </a>
                </h2>
                    <h2>Skills</h2>
                </div>
                <button className='nav-btn'>Contact Me</button>
            </div>
        
    )
}