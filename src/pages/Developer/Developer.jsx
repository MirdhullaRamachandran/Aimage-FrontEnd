import React, { useEffect } from 'react'
import Form from '../../components/Form/Form'

import { useNavigate } from 'react-router-dom'
import{useState} from 'react'                                                                                                                               
import Tableform from '../../components/Form/TableA'
import axios from 'axios'


export default function Event() {
    const navigate = useNavigate();
    const[modelOpen, setModelOpen]= useState(false);

    const [data, setData] = useState('');

  const [rows, setRows]=useState([
    
  ])

  const handleDeleteRow=(targetIndex)=>{
    setRows(rows.filter((_, idx)=> idx !== targetIndex));
  }

  const[rowToEdit, setRowToEdit]= useState(null)

  const handleEditRow=(idx) =>{
    setRowToEdit(idx);

    setModelOpen(true);
  };

  const handleDataget = () => {
    axios
      .get('http://localhost:5000/devget')
      .then((res) => {
        setData(res.data);
    if (res?.data?.status === "POSTED"){
      console.log('Sucessfully retrieved');
    }
}).catch((err) => console.log(err));
}
useEffect(()=>{
  handleDataget();
},[]);

  return (
    <>
    <Tableform rows={rows} deleteRow={handleDeleteRow} data={data} editRow={handleEditRow}/>
    <button className='button_click' onClick={()=>setModelOpen(true)}>ADD</button>
    {modelOpen && <Form closeModel={()=>{
      setModelOpen(false);
    }}/>}

    
    </>
  )
}
