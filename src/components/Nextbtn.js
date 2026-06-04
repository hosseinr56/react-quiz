import React from 'react'

export default function Nextbtn({ dispatch , answer }) {
  if(answer === null) return null;
    return (
    <button className='btn btn-ui' onClick={() => dispatch({ type: "next" })}>Next</button>
  )
}
