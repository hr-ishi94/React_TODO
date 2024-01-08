import React from 'react'
import Child from './Child'

function Footer() {
    const stylish={
        color:'green',
        backgroundColor:'red'
    }
  return (
    <>
    <div style={stylish} >I am the footer component</div>
    <Child />
    </>
  )
}

export default Footer