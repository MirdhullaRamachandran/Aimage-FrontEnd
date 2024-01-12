import React from 'react';

import EditSharpIcon from '@mui/icons-material/EditSharp';

import "./Table.css";



export default function Tableform({rows,deleteRow,data,editRow}) {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <>
      <div className="table-wrapper">
      
        <table className="table scrollable-table">
          <thead>
              <td>Client Name</td>
              <td>Event Name</td>
              <td>Date Of Event</td>
             
          </thead>
          <tbody>
            {
              Array.isArray(data) && data.map((row, idx) => {
                return <tr key={idx}>
                  <td>{row?.client_name}</td>
                  <td>{row?.event_name}</td>
                  <td>{formatDate(row?.event_date)}</td>
                  
                
             
                </tr>
              })
            }
            
          </tbody>
        </table>
        
      </div>
    </>

  )
}
