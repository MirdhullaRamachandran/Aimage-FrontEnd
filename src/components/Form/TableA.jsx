import React from 'react';

import EditSharpIcon from '@mui/icons-material/EditSharp';
import "./TableA.css";
import { useLocation } from 'react-router-dom';

export default function Tableform({ rows, deleteRow, data, editRow }) {

  console.log(data);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const loc=useLocation()

  return (
    <>
      <div className="table-wrapper">

        <table className="table scrollable-table">
          <thead>
            <td>Event No</td>
            <td>Client Name</td>
            <td>Selfie</td>
            <td>Album</td>
            <td>Detected Photos</td>
            <td>Remarks</td>
            <td>Received Date</td>
            <td>Run Date</td>
            <td>Status</td>
            <td>Received</td>
            {loc.pathname == '/admin' && (
            <>
            <td>event_name</td>
            <td>event_date</td>
            </>)}

          </thead>
          <tbody>
            {
              Array.isArray(data) && data.map((row, idx) => {
                return (
                  <>
                  
                    <tr key={idx}>
                      <td>{row?.eventId}</td>
                      <td>{row?.client_name}</td>
                      <td>{row?.no_of_selfies}</td>
                      <td>{row?.no_of_albums}</td>
                      <td>{row?.detected_photos}</td>
                      <td>{row?.remarks}</td>
                      <td>{formatDate(row?.received_date)}</td>
                      <td>{formatDate(row?.run_date)}</td>
                      <td>{row?.status}</td>
                      <td>{row?.album_received}</td>
                      {loc.pathname == '/admin' && (
                        <>
                        <td>{row?.event_name}</td>
                        <td>{row?.event_date}</td>
                        </>
                        
                      )}
                      
                      
                    </tr>
                  </>
                )
              })
            }

          </tbody>
        </table>

      </div>
    </>

  )
}
