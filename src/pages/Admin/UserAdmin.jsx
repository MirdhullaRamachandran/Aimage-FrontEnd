import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Home from '../../components/Nav/Home'
import './UserAdmin.css'
import Nav from '../../components/Nav/Nav'

export default function () {
  return (
    <>
    <div className='container-fluid bg-secondary min-vh-100 w-100'> 
    <Nav />
      <div className='row'>
        {/* <div className='col-2 bg-white vh-100'>
        <SideBar/>
        </div> */}
        <div className='col'>
        <Home/>
        </div>
      
        
      </div>
     </div> 
    
    </>
  )
}
