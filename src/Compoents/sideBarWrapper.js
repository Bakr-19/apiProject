import { useState, useEffect } from 'react'
import CSS from '../App.css'
import {v4 as uuidv4} from 'uuid'
import { click } from '@testing-library/user-event/dist/click'
import ApiOne from './ApiOne'
uuidv4()



const SideBarWrapper = ({}) => {


  
  let types = [[{name:"API 1", id:uuidv4(),
  click:false, api:true },{name:"API 2", id:uuidv4(),
   click:false, api:false },{name:"API 3", id:uuidv4(), click:false, api:false }]]

 

  const[selectedIndex, setSelectedIndex] = useState(-1)

  const [button,setButton] = useState(types[0])


  const ApiHandle = (id) => {
    {button.map(api => api.id === api.id?
      {...api, api: !api.api}: api)}
    setButton(...button)
  }

  return (
    <div className='app'>
      {button.map((api,index) => {
        return <button 
        className={ selectedIndex === index ? 'click' : 'api-btn'} 
        key={index}
        onClick={() => {setSelectedIndex(index)}}> {api.name} </button>
      })}
      {button.map((api,index) => {
        <ApiOne toggle={api.api} key={index} />
      })}

      
    </div>
  )
}

export default SideBarWrapper
