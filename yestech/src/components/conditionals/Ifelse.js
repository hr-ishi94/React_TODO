import React from 'react'

function Ifelse() {
    const n=-1
    
  return (
    <div>
        {n>0 ?<h1>Positive</h1>:n<0?<h1>Negative</h1>:<h1>Zero</h1>}
    </div>
  )
}

export default Ifelse