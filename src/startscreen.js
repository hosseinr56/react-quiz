import React from 'react'

export default function startscreen({ num }) {
  return (
    <div className='start'>
        <h2>Welcome to the Quiz</h2>
        <h3>{num} questions to test your React mastery</h3>
        <button className='btn btn-ui'>Let's start</button>
    </div>
  )
}
