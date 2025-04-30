import React, {useState, useEffect} from 'react'
import ImageCarousel from '../Functionality/ImageCarousel'

export function MyWork(props) {

    return(
        
            <div className='carousel' id='work'>
                <h2 className='carousel-title'>Featured Work</h2>
                <ImageCarousel />
            </div>
        
    )
}