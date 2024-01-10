import Form from 'react-bootstrap/Form';
import React from 'react'

import { Button } from 'react-bootstrap';

function ListTasks({task,index,removeTask}) {
  return (
    
        <div  style={{ display: 'flex', alignItems: 'center',marginRight:'2.5em'}}>
        
        <Form.Check
            className='text-white'
            type="checkbox"
            label={task.title}
            style={{ fontSize: '20px' }}
          />
          
        <Button onClick={()=>{removeTask(task.id)}} variant="secondary btn-lg m-3"><i class="fa-solid fa-trash"></i></Button>

    </div>
   
  )
}

export default ListTasks