import React, { useState } from 'react'
import {Container, Button} from 'react-bootstrap'

function State() {
    let [color,setColor] =useState('Blue')
    let colorChange=()=>(
        setColor('Green')
    )
    const [count,setCount]=useState(0)
    const addCOunt=()=>(
        setCount(count+1)
    )
    
  return (
    <Container>
    <h1 className='bg-secondary text-center'>My favorite color is {color}</h1>
    <Button onClick={colorChange}>Answer</Button>

    <h1 className='text-center'>Counter</h1>
    <h1 className='text-center'>{count}</h1>
    <div  className='d-flex justify-content-center'>
    <Button variant="success" className='m-3 btn-lg ' onClick={addCOunt}>+</Button>
    <Button variant="danger" className='m-3 btn-lg 'onClick={()=>setCount(count-1)}>-</Button>

    </div>
    </Container>
  )
}

export default State