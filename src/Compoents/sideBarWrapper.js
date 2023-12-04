import { useState, useEffect } from 'react'
import CSS from '../App.css'
import { click } from '@testing-library/user-event/dist/click'
import ApiOne from './ApiOne'
import ApiTwo from './ApiTwo'
import ApiThree from './ApiThree'




const SideBarWrapper = () => {

 

  const[selectedIndex, setSelectedIndex] = useState(-1)

  const [apiOne,setApiOne] = useState([{name:"API 1", id: 0}])

  const [apiTwo,setApiTwo] = useState([{name:"API 2", id: 1}])

  const [apiThree,setApiThree] = useState([{name:"API 3", id: 2}])






  const changeIndex = (index) => {
    setSelectedIndex(index)

  }

  return (
    <div className='app'>
      
      {apiOne.map((api1,index) => {
        return <button 
        className={ selectedIndex === api1.id ? 'click' : 'api-btn'} 
        key={index}
        onClick={() => {changeIndex(api1.id)} }> {api1.name} </button>
      })}
      
      {apiTwo.map((api2,index) => {
        return <button 
        className={ selectedIndex === api2.id ? 'click' : 'api-btn'} 
        key={index}
        onClick={() => {changeIndex(api2.id)} }> {api2.name} </button>
      })}
      
      {apiThree.map((api3,index) => {
        return <button 
        className={ selectedIndex === api3.id ? 'click' : 'api-btn'} 
        key={index}
        onClick={() => {changeIndex(api3.id)} }> {api3.name} </button>
      })}


      {apiOne.map((api1,index) => {
        return <ApiOne selectedIndex={selectedIndex} index={api1.id} key={index} />
      })}
      
      {apiTwo.map((api2,index) => {
        return <ApiTwo selectedIndex={selectedIndex} index={api2.id} key={index} />
      })}
      
      {apiThree.map((api3,index) => {
        return <ApiThree selectedIndex={selectedIndex} index={api3.id} key={index} />
      })}







      
    </div>
  )
}

export default SideBarWrapper
