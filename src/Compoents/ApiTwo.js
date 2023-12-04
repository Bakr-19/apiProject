import React from 'react'
import { useState,useEffect } from 'react'

const ApiTwo = ({selectedIndex, index}) => {

  const [apiSecond, setApiSecond] = useState("")

  const getApi = async () =>{
    const response = await  fetch('http://api.alquran.cloud/v1/ayah/262')
    const data = await response.json()
    setApiSecond(data)
  } 

  useEffect(() => {
    getApi()
  }, [selectedIndex])

  


  if (!apiSecond) return <h1>loading...</h1>

  return (
    <div>
      { selectedIndex === index ?  <p className='apiTwo' > {apiSecond.data.text}</p>: "" }
      {console.log("2 Selected Index " + selectedIndex + " Key " + index )}
    </div>
  )
}

export default ApiTwo
