import React from 'react'

export default function Option({questions , dispatch , answer}) {
    const hasanswer = answer !== null;
  return (
    <div className='options'>
        {questions.options.map((option , index) => (
            <button key={index} className={`btn btn-option ${index=== answer ? 'active' : ""} ${
                hasanswer
                ?index=== questions.correctOption ? 'correct' : "wrong" : "" }`}
            disabled={hasanswer}
            onClick={()=>dispatch({type: "newAnswer", payload: index})}>{option}</button>
        ))}
    </div> 
  )
}
