import React from 'react'
import { useState, useEffect } from 'react'


const ApiOne = ({toggle}) => {

  const [api, setApi] = useState("")

  const getApi = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setApi(data)
  }
  
  
  useEffect(() => {
    getApi()
  }, [])



  
  
  


  if(!api) return <h1>loading...</h1>

  return (
    <div>
      {toggle === true ?  <p> {api.slip.advice}</p>: "H" }

    </div>
  )
}

export default ApiOne
