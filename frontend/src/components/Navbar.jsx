import React, { useContext } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import userImg from "../assets/user.png"
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className='flex sm:flex-row sm:justify-between sm:items-center py-1 bg-white'>
      <div>
        <Link to="/">
          <p className='sm:text-3xl font-bold text-navy ml-4 cursor-pointer'>Entertaino</p>
        </Link>
      </div>

      {user && <div className='flex items-center'>
        <AiOutlineSearch className='text-[1rem] relative left-96 cursor-pointer' />
        <input type="text" placeholder='Search...' className='text-[1rem] bg-pinkWhite sm:p-[.4em] sm:px-[.8em] rounded-xl outline-none w-[400px]' />
      </div>}
      {user && <div className='flex gap-2 items-center sm:mr-4'>
        <button className='text-base font-semibold text-navy'>Homepage</button>
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture || userImg} alt="img" className='w-[2.5rem] h-[2.5rem] rounded-[50%] m-[.5em] cursor-pointer' />
        </Link>
      </div>}

      {!user && (
        <div className='m-2'>
          <Link to="/login">
            <button className="py-1 md:px-2 font-medium md:text-lg rounded-lg text-navy md:mr-2 shadow-md px-1 sm:ml-4">
              Log in
            </button>
          </Link>
          <Link to="/register">
            <button className="py-1 md:px-2 font-medium md:text-lg  rounded-lg text-white bg-navy md:ml-2 hover:shadow-md md:mr-2 px-1 ml-1 mr-2">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar