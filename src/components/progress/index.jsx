import React from 'react'
import './index.css'

export default function Progress({percentage, current, last}) {
  return (
    <div className='progress'>
      <div className="progress-top">
        <div>{percentage}</div>
        <div>{current} out {last}</div>
      </div>
    </div>
  )
}
