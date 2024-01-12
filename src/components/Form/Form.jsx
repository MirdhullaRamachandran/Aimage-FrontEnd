import React, { useEffect, useState } from 'react'
import './Form.css'
import { useForm } from 'react-hook-form';
import axios from "axios"

export default function Form({ closeModel }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleData = (data) => {
    const {eventId,client_name,no_of_selfies,no_of_albums,album_received,received_date,detected_photos,remarks,status,run_date}=data;
    axios
      .post('http://localhost:5000/devpost',{eventId,client_name,no_of_selfies,no_of_albums,album_received,received_date,detected_photos,remarks,status,run_date})
      .then((res) => {
        console.log(res);
        if (res?.data?.status === "POSTED"){
          console.log('sucessfully data posted');
        }
        closeModel();
  }).catch((err) => console.log(err));
}

return (
  <>
      <div className="form_container"
      onClick={(e) => {
        if (e.target.className === "form_container")
          closeModel();
      }}>
      <div className='model'>

        <form className='main_form-input' onSubmit={handleSubmit(handleData)}>
          {/* <div className="row1"> */}
          <div className="form_heading"><b>EVENT DETAILS</b></div>
          <div className="inputcontainer" >
            <label className='label_color' >Event Number</label>
            <input className='inputcontain' type='number' name="eventId" placeholder='Enter event number'
              {...register("eventId", {
                required: {
                  value: true,
                  message: "Event Number is required",
                },
              })}
            />
          </div>
          <div className="inputcontainer" >
            <label className='label_color' >Client Name</label>
            <input className='inputcontain' type='text' name="client_name" placeholder='Enter client name'
              {...register("client_name", {
                required: {
                  value: true,
                  message: "ClientName is required",
                },
              })}
            />
          </div>
          <div className="inputcontainer">
            <label className='label_color'>Selfie</label>
            <input className='inputcontain' type='number' name="no_of_selfies" placeholder='No of selfie'
              {...register("no_of_selfies", {
                required: {
                  value: true,
                  message: "Selfie is required",
                },
              })}
            />
          </div>
          {/* </div> */}

          {/* <div className="row1"> */}
          <div className="inputcontainer">
            <label className='label_color'>Album</label>
            <input className='inputcontain' type='number' name='no_of_albums' placeholder='No of albums'
              {...register("no_of_albums", {
                required: {
                  value: true,
                  message: "Album is required",
                },
              })}
            />
          </div>
          {/* </div> */}
          {/* <div className="row1"> */}
          <div className="inputcontainer">
            <label className='label_color'>Detected Photos</label>
            <input className='inputcontain' type='number' name="detected_photos" placeholder='No of detected photos'
              {...register("detected_photos", {
                required: {
                  value: true,
                  message: "Detectedphotos is required",
                },
              })}
            />
          </div>
          <div className="inputcontainer">
            <label className='label_color'>Remarks</label>
            <input className='inputcontain' type='number' name='remarks' placeholder='No of remarks'
              {...register("remarks", {
                required: {
                  value: true,
                  message: "Remarks is required",
                },
              })}
            />
          </div>
          {/* </div> */}
          <div className="row2">
            <div className="inputcontainer" style={{ width: '50%' }}>
              <label className='label_color'>Received Date</label>
              <input className='inputcontain date_input' type='date' name='received_date' style={{ width: '100%' }}
                {...register("received_date", {
                  required: {
                    value: true,
                    message: "ClientName is required",
                  },
                })}
              />
            </div>
            <div className="inputcontainer" style={{ width: '50%' }}>
              <label className='label_color'>Run Date</label>
              <input className='inputcontain date_input' type='date' name='run_date' style={{ width: '100%' }}
                {...register("run_date", {
                  required: {
                    value: true,
                    message: "Run Date is required",
                  },
                })}
              />
            </div>
          </div>

          {/* <div className="row1"> */}
          <div className="inputcontainer">
            <label className="label_color" htmlFor="status">
              Status
            </label>
            <select className="inputcontain" id="status" name="status" {...register('status', { required: true })}>
              <option value="">Select</option>
              <option value="sent">Sent</option>
              <option value="inprogress">In-Progress</option>
              <option value="notstarted">Not Started</option>
            </select>
          </div>

          <div className="radiocontainer">
            <label className="radio_input label_color" htmlFor="album_received">
              Received
            </label>
            <input className="radio_input" type="radio" id="yes" name="album_received" value="1" {...register('album_received', { required: true })} />
            <label className="radio_input" htmlFor="yes">
              Yes
            </label>
            <input className="radio_input" type="radio" id="no" name="album_received" value="0" {...register('album_received', { required: true })} />
            <label className="radio_input" htmlFor="no">
              No
            </label>
          </div>

          <div className='center_input'>
            <div style={{ width: '30%' }}>
              <button className='color' type='submit'>SUBMIT</button>
            </div>
          </div>
          {/* </div> */}
        </form>
      </div>
      </div>
    </>

  )
}
