import React from 'react'
import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function () {
  return (
    <div className='bg-white sidebar p-2'>
        <div className='m-2'>
            {/* <i className='bootstrap-fill me-2 fs-4'></i> */}
            <span className='admin_name fs-4 '>ADMIN</span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'> 
            <a className='list-group-item py-2 my-1'>
              {/* <i className='speedometer2'></i> */}
            <span className='fs-5'>DashBoard</span>
            </a>
            <a className='list-group-item py-2'>
            {/* <i className='house'></i> */}
            <span className='fs-5'>Home</span>
            </a>
            <a className='list-group-item py-2'>
            <span className='fs-5'>Product</span>
            </a>
            <a className='list-group-item py-2'>
            <span className='fs-5'>Report</span>
            </a>
            <a className='list-group-item py-2'>
            <span className='fs-5'>Customer</span>
            </a>
        </div>
    </div>
    
  )
}
