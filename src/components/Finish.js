import React from 'react'

export default function Finish({ points, maxpossiblepoints, highscore , dispatch }) {
    const percentage = (points / maxpossiblepoints) * 100;
    let emj;
    if(percentage === 100 ) emj = '🥇'
    else if(percentage >= 80 && percentage < 100) emj = '🥈'
    else if(percentage >= 50 && percentage < 80) emj = '🥉'
    else emj = '😞'
  return (
    <>
    <p className='result'>
        <span>{emj}</span>Your score is <strong>{points}</strong> out of
        {maxpossiblepoints}
        ({Math.ceil(percentage)}%)
    </p>
    <p className='highscore'>(Highscore: {highscore} points)</p>
    <button className='btn btn-ui' onClick={() => dispatch({ type: "restart" })}>Restart quiz</button>
    </>
  )
}
