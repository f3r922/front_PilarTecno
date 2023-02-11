import React from 'react';
import "./interestPlaces.css"
import { ImageSlider } from '../../components/ImageSlider/ImageSlider';

const Seccion1 = (props) => {
    
    return(
        <section className='styleSeccion' ref={props.lugares}>
            <div className='title'>
                <h1>Lugares de Interes</h1>
            </div>
            <ImageSlider category='lugares'/>
        </section>
    )
}

export default Seccion1