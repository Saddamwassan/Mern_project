import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
        <nav className='container p-4 bg-blue-400'>
        <ul className='flex gap-2 justify-center'>
            <li className='p-1'>
                <Link to="/">Home</Link>
            </li>
            <li className='p-1'>
                <Link to="/Articles">Articles</Link>
            </li>
            <li className='p-1'>
                <Link to="/AboutUs">About-us</Link>
            </li>
        </ul>
        </nav>
  )
}

export default Nav