import React from 'react'
import './notfound.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='no-page container'>
        <div className="no-page-left">
            <h3>404 Error</h3>
        </div>
        <div className="no-page-right">
          <div className='no-page-text'>Page not found</div>
          <div className='no-page-link-text'>Return to <Link to='/'>Homepage</Link></div>
        </div>
    </div>
  )
}
