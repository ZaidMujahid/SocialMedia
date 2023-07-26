import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import profile from "../assets/1p.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex sm:flex-row sm:justify-between sm:items-center py-1 bg-white'>
      <div>
        <Link to="/">
          <p className='sm:text-3xl font-bold text-navy ml-4 cursor-pointer'>Entertaino</p>
        </Link>
      </div>
        <div className='flex items-center'>
            <AiOutlineSearch className='text-[1rem] relative left-96 cursor-pointer'/>
            <input type="text" placeholder='Search...' className='text-[1rem] bg-pinkWhite sm:p-[.4em] sm:px-[.8em] rounded-xl outline-none w-[400px]'/>
        </div>
        <div className='flex gap-2 items-center sm:mr-4'>
            <button className='text-base font-semibold text-navy'>Homepage</button>
            <Link to="/profile">
              <img src={profile} alt="img" className='w-[2.5rem] h-[2.5rem] rounded-[50%] m-[.5em] cursor-pointer'/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar