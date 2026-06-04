import React, { useEffect } from 'react'

export default function Timer({dispatch , secondRemaning}) {
    const mins = Math.floor(secondRemaning/60);
    const seconds = secondRemaning % 60;
    useEffect(() => {
        const id = setInterval(() => {
            dispatch({type:'tick'})
        }, 1000);

        return()=> clearInterval(id);
    }, [dispatch]);
  return (
    <div className='timer'>
        {mins<10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
        </div>
  )
}
