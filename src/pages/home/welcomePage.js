import React from 'react';
import Appbar from '../../components/appBar/appBar';
import "./welcomePage.css"
import Seccion1 from '../seccion1/interestPlaces';
import Seccion2 from '../seccion2/Cultural';
import { useRef } from "react"
import BackToTopButtom from '../../components/BackToTopButtom/BackToTopButtom';

const Welcome = () => {
  const lugares = useRef(null)
  const fiestas = useRef(null)
  
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }
  return(
    <> 
      <div className='intro'>
        <div className="Section_top">
            <div className="content">
                <h1>BIENVENIDOS <span>La Rioja</span></h1>
            </div>
            <Appbar 
              scrollToSection={scrollToSection}
              lugares = {lugares}
              fiestas = {fiestas}
            />
        </div>
      </div>
      <Seccion1 lugares={lugares}/>
      <Seccion2 fiestas={fiestas}/>
      <BackToTopButtom/>
    </>
  ) 
}

export default Welcome