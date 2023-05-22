import React from 'react'
import {Link} from "react-router-dom"
const Error = () => {
  return (
    <section className='section error-page'>
      <div className='error-section'>
        <h2>You missed your way</h2>
        <Link to="/" className='btn error-btn' >
        Go Back Home
        </Link>
      </div>  
    </section>
  )
}

export default Error