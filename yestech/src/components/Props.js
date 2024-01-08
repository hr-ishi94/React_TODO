import React from 'react'

function Props({states}) {
  return (
    states.map((state)=>(
    <div className='bg-primary text-center'>
        <h1>{state.name}</h1>
        <h4>{state.year}</h4>
        <h4>{state.lang}</h4>
    </div>

    ))
  )
}

export default Props