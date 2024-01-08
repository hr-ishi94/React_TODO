import React from 'react'
import { Button ,Container}from 'react-bootstrap'


function Event() {
    const click =()=>(
        alert('You clicked me!!')
    )
    const DoubleClick=()=>(
        alert('You Double clicked me!!')

    )
    const mouse=()=>{
        alert('You mouse overed me!!')
    }
  return (
    <Container >
        <h1 className='bg-primary text-center'>React Events</h1>
        <Button variant="primary" onClick={click}>Click me</Button>
        <h1 onDoubleClick={DoubleClick}>Double click me</h1>
        <input type="text" onChange={mouse} />
        <input type="text" onKeyDown={mouse}/>
        <h1 onMouseOver={mouse}>Mouse over me</h1>
        

        
    </Container>
  )
}

export default Event