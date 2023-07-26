import React from 'react'
import profile from "../assets/1p.jpg"
import { BiImage } from "react-icons/bi"
import { CgAttachment } from "react-icons/cg"
import { AiOutlineAudio } from "react-icons/ai"
import { BsClipboardData } from "react-icons/bs"

const CreatePost = () => {
    return (
        <div>
            <div className='bg-white p-4 rounded-xl m-2 mt-5'>
                {/* search and profile */}
                <div className='flex gap-2'>
                    <img src={profile} alt="img" className='w-[2.8rem] h-[2.5rem] rounded-[50%] m-[.5em]' />
                    <input type="text" placeholder="What's on your mind..." className='text-base sm:px-[.8em] rounded-3xl outline-none w-full' />
                </div>
                {/* border */}
                <div className='border-b border-gray-100 my-4'></div>
                {/* attachments */}
                <div className='flex justify-between gap-20'>
                    <div className='flex gap-4'>
                        <div className='flex items-center gap-[2px] text-sm text-navy cursor-pointer font-semibold'>
                            <BiImage />
                            <p>Image</p>
                        </div>
                        <div className='flex items-center gap-[2px] text-sm text-navy cursor-pointer font-semibold'>
                            <CgAttachment />
                            <p>Attachment</p>
                        </div>
                        <div className='flex items-center gap-[2px] text-sm text-navy cursor-pointer font-semibold'>
                            <AiOutlineAudio />
                            <p>Audio</p>
                        </div>
                        <div className='flex items-center gap-[2px] text-sm text-navy cursor-pointer font-semibold'>
                            <BsClipboardData />
                            <p>Clip</p>
                        </div>
                    </div>
                    <button className='bg-pinkWhite px-4 py-1 rounded-xl text-navy text-sm font-semibold'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost