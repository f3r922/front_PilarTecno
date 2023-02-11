import "./appBar.css"


const Appbar = (props)=> {
  
  const {scrollToSection, lugares, fiestas}= props

  return(
    <div className="App">
        <ul>
          <li className="link" onClick={()=> scrollToSection(lugares)}>Lugares de Interes</li>
          <li className="link" onClick={()=> scrollToSection(fiestas)}>Fiestas Tradicionales</li>
        </ul>
    </div>
  )
}

export default Appbar