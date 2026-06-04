import React from 'react'

export default function Option({questions}) {
  return (
    <div className='options'>
        {questions.options.map((option , index) => (
            <button key={index} className='btn btn-option'>{option}</button>
        ))}
    </div> 
  )
}
