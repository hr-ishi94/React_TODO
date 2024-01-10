import Form from 'react-bootstrap/Form';
import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function AddTask({addTask}) {
    const [value,setValue]=useState("")

    const addItem=()=>{
      if (value.trim()!==''){
        addTask(value)
        setValue("")
        
      }
    }
    

  return (
    <div className='p-5 text-center' onChange={(e)=>{setValue(e.target.value)}} style={{ display: 'flex', alignItems: 'center' }}>
        <Form.Control size="lg" type="text" value={value} placeholder="Add Todo" style={{width:"60em"}}/>
        <Button onClick={addItem} variant="warning btn-lg m-3">Add</Button>

    </div>
  )
}

export default AddTask