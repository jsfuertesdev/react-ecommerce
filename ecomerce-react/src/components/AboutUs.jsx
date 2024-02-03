import React, { useEffect } from 'react'

const AboutUs = () => {

  const clickear = () => {
    console.log("Click")
  }
  
  useEffect(() => {
    window.addEventListener("click",clickear)

    return () => {
      window.removeEventListener("click",clickear)
    }
  }, [])
  

  return (
    <div className='container'>
      <h1 className='main-table'>Nosotros</h1>
      <p>Este es el componente "Nosotros"</p>
    </div>
  )
}

export default AboutUs