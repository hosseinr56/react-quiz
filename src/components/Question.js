import React from 'react'
import Option from './Option';
export default function Question({questions , dispatch , answer}) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  )
}
