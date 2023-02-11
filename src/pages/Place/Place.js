import React from 'react'
import { PlaceData } from '../../components/services/PlaceData'
import BackToTopButtom from '../../components/BackToTopButtom/BackToTopButtom.js'
import Map from '../../components/map/map'
import { Link } from 'react-router-dom'
import Loading from '../../components/loading/loading.js'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import "./Place.css"


export const Place = () => {

  let {place, loading} = PlaceData()

  let position = [place.latitude, place.longitude]
  
  

  return (
    <>
      <header className='header'>
        <div className='left'>
          <Link to={"/"} className='link'>
            <FaArrowAltCircleLeft className='arrow'/ >
					</Link>
          <p className='menu'>volver</p>
        </div>
        <div className='center'>
          <h1>{place.name}</h1>
        </div>
      </header>
      <main >

        <div>
        <p className='parrafo'>{place.acerca}</p>
        </div>

        <div>
        <h2>¿Donde se encuentra?</h2>
        <p className='parrafo'>{place.location}</p>
        </div>
        
          <h2 >¿Como llegar?</h2>
          <div className='div_mapa'>
          {loading? <Loading /> :<Map position={position}/>  }
          </div>
        
      </main>
      <BackToTopButtom/>
    </>
  )
}
