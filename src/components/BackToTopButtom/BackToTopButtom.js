import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './BackToTopButtom.css'

export const BackToTopButtom = () => {
	const [backToTopButtom, setBackToTopButtom] = useState(false)

	useEffect(()=>{
		window.addEventListener("scroll", () => {
			if(window.scrollY > 100) {
				setBackToTopButtom(true)
			}else {
				setBackToTopButtom(false)
			}
		},[])
	})


	const scrollUp = ()=> {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	return(
		<div>
			{
				backToTopButtom && (
					<FaArrowUp className='buttom-up'
						onClick={scrollUp}
					FaArrowUp/>
				)
			}
		</div>
	)
}
export default BackToTopButtom