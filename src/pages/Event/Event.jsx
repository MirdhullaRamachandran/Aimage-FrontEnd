import React, { useEffect } from 'react'
import { useState } from 'react'
import Tableform from '../../components/Table/Table'
import Model from '../../components/Table/Model'
import axios from 'axios'
import { HandshakeOutlined } from '@mui/icons-material'


export default function Event() {
  const [modelOpen, setModelOpen] = useState(false);
  const [data, setData] = useState('');
  const [rows, setRows] = useState([
  ])

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  }

  const [rowToEdit, setRowToEdit] = useState(null)



  const handleDataget = () => {
    axios
      .get('http://localhost:5000/eveget')
      .then((res) => {
        setData(res.data);
        if (res?.data?.status === "POSTED") {
          console.log('Sucessfully retrieved');
        }
      }).catch((err) => console.log(err));
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModelOpen(true);

    const uniqueData = data.filter((item, index) => (
      data.indexOf(item) === idx)
    )
    setData(uniqueData);


  };

    useEffect(() => {
    handleDataget();
  }, []);
  return (
    <>
      <Tableform rows={rows} deleteRow={handleDeleteRow} data={data} editRow={handleEditRow} />
      <button className='button_click' onClick={() => setModelOpen(true)}>ADD</button>
      {modelOpen && <Model closeModel={() => {
        setModelOpen(false);
      }}
      
      />}
    </>
  )
}
