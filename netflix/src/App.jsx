import React from 'react'
import NetFlix from './NetFlix'
import './App.css'


const Arr =[
  {
    Name:"Mobile",
    Quality:"480p",
    Price:149,
    Vq :"Fair",
    Resolution:"480p",
    Devices:"mobile Phone,Tablet",
    Watch:1,
    Download:1,
  },    
  {
    Name:"Basic",
    Quality:"720p",
    Price:199,
    Vq :"Good",
    Resolution:"720p",
    Devices:"mobile Phone,Tablet",
    Watch:1,
    Download:1,
  },     
  {
    Name:"Standard",
    Quality:"1080p",
    Price:499,
    Vq :"Great",
    Resolution:"1080p (Full HD)",
    Devices:"Tv,Computer,mobile Phone,Tablet",
    Watch:2,
    Download:2,
  }, 
  {
    Name:"Premium",
    Quality:"4k+HDR",
    Price:649,
    Vq :"Best",
    Resolution:"4k+HDR",
    Devices:"Tv,Computer,mobile Phone,Tablet",
    Watch:4,
    Download:6,
    }
]
const App = () => {
  return (
    <div className='App'>
        {Arr.map((item)=>(
          <NetFlix {...item}/>
        )
        )}
    </div>
  )
}

export default App