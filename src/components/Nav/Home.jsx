import React, { useEffect, useState } from 'react'
import Navbar from './Nav'
import Tableform from '../Form/TableA'
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);

  const handleDataget = () => {
    axios
      .get('http://localhost:5000/fetchbyid')
      .then((res) => {
        setData(res.data);
        if (res?.data?.status === "POSTED") {
          console.log('Sucessfully retrieved');
        }
      }).catch((err) => console.log(err));
  }
  useEffect(() => {
    handleDataget();
  }, []);

  console.log(data);

  const sentitems = data.filter((f)=>f.status==='sent')
  console.log(sentitems);

  const progress = data.filter((f)=>f.status==='inprogress')
  console.log(progress);

const pending = data.filter((f)=>f.status==='notstarted')
  console.log(pending);

  return (
    <>
      <div className='px-3'>

        <div className='container-fluid'>
          <div className='row g-3 my-2'>
            <div className='col-md-3 p-1'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                  <h3 className='fs-2'>{data.length}</h3>
                  <p className='fs-5'>No of Events</p>
                </div>
              </div>
            </div>

            <div className='col-md-3 p-1'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                  <h3 className='fs-2'>{sentitems.length}</h3>
                  <p className='fs-5'>Sent</p>
                </div>
              </div>
            </div>

            <div className='col-md-3 p-1'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                  <h3 className='fs-2'>{progress.length}</h3>
                  <p className='fs-5'>In-progress</p>
                </div>
              </div>
            </div>

            <div className='col-md-3 p-1'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                  <h3 className='fs-2'>{pending.length}</h3>
                  <p className='fs-5'>Pending</p>
                </div>
              </div>
            </div>



          </div>


        </div>
        
        <Tableform  data={data}/>
      </div>


    </>
  )
}
