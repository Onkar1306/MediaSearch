import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='w-full flex justify-between items-center px-12 py-7'>
            <h2 className='text-emerald-600 font-bold text-2xl'>MediaSearch</h2>
            <div className='flex gap-4 items-center '>
                <Link to='/' className='px-3 py-4 text-white bg-emerald-600 rounded hover:bg-emerald-700 active:scale-95' >Search</Link>
                <Link to='/collection' className='px-3 py-4 text-white bg-emerald-600 rounded hover:bg-emerald-700 active:scale-95'>My Collection</Link>
            </div>
        </div>
  )
}

export default NavBar
