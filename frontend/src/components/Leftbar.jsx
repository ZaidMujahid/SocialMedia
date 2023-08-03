import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { MdOutlineAccountCircle } from "react-icons/md"
import { BiCommentDetail } from "react-icons/bi"
import dummyImg from "../assets/1.jpg"
import "../index.css"

const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className='flex flex-col bg-white p-4 gap-2 rounded-xl m-2 mt-5'>
      <p className='text-lg ml-1 font-semibold'>Latest Post Activity</p>

        <div className='flex flex-col bg-white gap-4'>
          <div>
            <img src={dummyImg} alt="mountain" className='w-[250px] rounded-lg cursor-pointer mx-auto' />
          </div>
          <div className='flex justify-center items-center'>
            <div className='flex gap-[2px]'>
              <AiOutlineHeart className='text-sm' />
              <p className='text-[.7rem] font-medium mr-1'>23</p>
              <BiCommentDetail className='text-sm ml-1' />
              <p className='text-[.7rem] font-medium'>10</p>
            </div>
          </div>
        </div>
            <button><span className='text-base hover:text-pink font-semibold text-navy'>See all Posts</span></button>
      </div>
      <div className='flex flex-col'>
        <p className='text-lg ml-2 font-semibold mt-4 px-4'>Friend's List</p>
        <div className='flex flex-col bg-white m-2 p-2 rounded-xl gap-2'>
          <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy'>
            <MdOutlineAccountCircle/>
            <p>Zaid Mujahid</p>
          </button>
          <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy'>
            <MdOutlineAccountCircle/>
            <p>Zaid Mujahid</p>
          </button>
          <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy'>
            <MdOutlineAccountCircle/>
            <p>Zaid Mujahid</p>
          </button>
          <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy'>
            <MdOutlineAccountCircle/>
            <p>Zaid Mujahid</p>
          </button>
          <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy'>
            <MdOutlineAccountCircle/>
            <p>Zaid Mujahid</p>
          </button>
          <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy'>
            <MdOutlineAccountCircle/>
            <p>Zaid Mujahid</p>
          </button>
          <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy'>
            <MdOutlineAccountCircle/>
            <p>Zaid Mujahid</p>
          </button>
          <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy'>
            <MdOutlineAccountCircle/>
            <p>Zaid Mujahid</p>
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Leftbar