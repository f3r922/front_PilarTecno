import React from 'react';
import "./Cultural.css"
import { ImageSlider } from '../../components/ImageSlider/ImageSlider';

const Seccion2 = (props) => {
    
    return(
        <section className='styleSeccion' ref={props.fiestas}>
            <div className='title'>
                <h1>Fiestas Tradicionales</h1>
            </div>
            <ImageSlider category='fiestas'/>
        </section>
    )
}

export default Seccion2