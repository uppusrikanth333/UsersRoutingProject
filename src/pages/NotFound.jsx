import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div>page not found</div>
    <Link to="/">
    <button>back</button>
    </Link>

    </>
    
  )
}

export default NotFound