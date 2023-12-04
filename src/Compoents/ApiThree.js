import React from 'react'
import { useState,useEffect } from 'react'

const ApiThree = ({selectedIndex, index }) => {

 const [apiThree, setApiThree] = useState("")

  const getApi = async () => {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ae863a5778d8700f6f4d2b4026c4c2bb')
      const data = await response.json()
      setApiThree(data)
  }


  useEffect(() => {
    getApi()
  }, [selectedIndex])


  if(!apiThree) return <h1>loading...</h1>

  const weatherData = apiThree.weather




  return (
    <div>
      { selectedIndex === index ?  <p className='apiThree' > {weatherData.map(weather => { return <p> {weather.id} {weather.icon} {weather.main} {weather.description}</p>
      })}</p>: "" }
      {console.log("3 Selected Index " + selectedIndex + " Key " + index )}

    </div>
  )
}

export default ApiThree
