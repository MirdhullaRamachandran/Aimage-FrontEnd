import React, { useState } from 'react'
import './Model.css';
import { useForm } from 'react-hook-form';
import axios from "axios"
import backgroundImage from '../../assets/AImagebackground2.png'

export default function Model({ closeModel}) {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 

  const handledata = (data) => {
    const { client_name, event_name, event_date } = data;

    axios.post('http://localhost:5000/evepost', { client_name, event_name, event_date })
      .then((res) => {
        console.log(res);
        if (res?.data?.status === "POSTED") {
          console.log('sucessfully data posted');
        } 
        closeModel();  
      }).catch((err) => console.log(err));

  }

  const modelStyle = {
    backgroundImage: `url(${backgroundImage})`,
    /* Additional styles can be added here */
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    /* Add more background-related styles as needed */
  };

  return (
    <div
      // style={modelStyle}
      className='model_container'
      
      onClick={(e) => {
        if (e.target.className === "model_container")
          closeModel();
      }}>

      <div className='model'>
        <div className="form_heading"><b>EVENT DETAILS</b></div>
        <form onSubmit={handleSubmit(handledata)}>
          <div className='inputcontainer'>

            <label className='label_color'>Client Name</label>
            <input className='inputcontain' type='text' name="client_name" placeholder='Enter client name'
              
              {...register("client_name", {
                required: {
                  value: true,
                  message: "ClientName is required",
                },
              })}
            />
          </div>
          <div className='inputcontainer'>
            <label className='label_color'>Event Name</label>
            <input className='inputcontain' type='text' name="event_name" placeholder='Enter event name'
              
              {...register("event_name", {
                required: {
                  value: true,
                  message: "EventName is required",
                },
              })}
            />
          </div>
          <div className='inputcontainer'>
            <label className='label_color'>Event Date</label>
            <input className='inputcontain' type='date' name='event_date'
              {...register("event_date", {
                required: {
                  value: true,
                  message: "Event Date is required",
                },
              })}
            />
          </div>
          <button type='submit' className='button_click' >Submit</button>
        </form>
      </div>
    </div>
  )
}
