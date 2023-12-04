import React from 'react'
import { useState, useEffect } from 'react'


const ApiOne = ({selectedIndex, index}) => {

  const [api, setApi] = useState("")

  const getApi = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setApi(data)
  }
  





  useEffect(() => {
    getApi()
  }, [selectedIndex])



  
  
  


  if(!api) return <h1>loading...</h1>

  return (
    <div >
      { selectedIndex === index ?  <p className='apiOne' > {api.slip.advice}</p>: "" }
      {console.log(" Selected Index " + selectedIndex + " Key " + index )}
    </div>
  )
}

export default ApiOne
