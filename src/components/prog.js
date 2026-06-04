import React from 'react'

export default function prog({index , numQuestions , points , maxpossiblepoints , answer}) {
  return (
    <header className='progress'>
        <progress max={numQuestions} value={index + Number(answer !== null)}></progress>
        <p>Question <strong>{index+1}</strong>/ {numQuestions} </p>
        <p><strong>{points}</strong>/ {maxpossiblepoints} </p>
    </header>
  )
}
