import React, { useState } from 'react'
import { SliderData } from '../services/SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Loading from '../loading/loading';
import "./ImageSlider.css"


export const ImageSlider = (props) => {


	const {places, loading} = SliderData(props)
	console.log(places)

	const [current, setCurrent] = useState(0)
	const length = places.length

	const nextSlide = () => {
		setCurrent(current === length - 1? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent( current === 0 ? length - 1 : current -1)
	}
	
	return ( 
		<div className='slider'>
			<FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
			<FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
      		{ loading ? <Loading/> :
				places.map((slide, index) => (
				<div
					className={index === current? 'slide active' : 'slide'}
					key={slide._id}
				>
					{index === current && (
						<figure key={slide._id} >
							<img  src={'http://localhost:4000/img/uploads/' + slide.filename} alt={slide.filename} className='image'/>
							<figcaption>
								<h3>{slide.name}</h3>
								<p>{slide.description}</p>
								<Link to={`/place/${slide._id}`}>
									<p>Leer mas...</p>
								</Link>
							</figcaption>
						</figure>
					)}
						</div>
				))
			} 
		</div>
  )
}
