import React, { useState } from 'react'
import profile from "../assets/1p.jpg"
import mountain from '../assets/1.jpg'
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { AiOutlineSend } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"

const Posts = ({ type, post }) => {
    // Handling props in tailwind CSS
    const imageWidth = {
        "homePage" : "w-[650px]",
        "profilePage" : "w-[500px]"
    }

    const [like, setLike] = useState('')
    const [isliked, setisLiked] = useState(false)

    const likeHandler = () => {
        setLike(isliked ? like - 1 : like + 1)
        setisLiked(!isliked)
    }
    return (
        <section className='bg-white m-2 rounded-xl'>
            {/* profile and name */}
            <div className='flex gap-2 p-4'>
                <img src={profile} alt="img" className='w-[2.5rem] h-[2.5rem] rounded-[50%] m-[.5em]' />
                <div className='flex flex-col justify-center'>
                    <p className='text-sm font-semibold text-navy'>Zaid Mujahid</p>
                    <p className='text-[.7rem] font-medium'>5 min ago</p>
                </div>
            </div>
            {/* description and image */}
            <div>
                <p className='text-base text-navy font-semibold px-4'>{post.desc}</p>
                <img src={post.img} alt="mountain" className={`${imageWidth[type]} p-4`} />
            </div>

            {/* like and comment */}
            <div className='flex gap-2 px-4 pb-4 items-center'>
                <div className='flex items-center gap-[2px]'>
                    {!isliked && <AiOutlineHeart className='text-xl cursor-pointer' onClick={likeHandler} />}
                    {isliked && <AiFillHeart className='text-xl cursor-pointer text-navy' onClick={likeHandler} />}
                    <span className='text-sm font-semibold'>{post.likes.length}</span>
                </div>
                <div className='flex items-center gap-[2px]'>
                    <BiCommentDetail className='text-xl cursor-pointer' />
                    <span className='text-sm font-semibold'>{post.comments.length}</span>
                </div>
                <div className='flex items-center basis-[90%] relative'>
                    <AiOutlineSend className='text-xl absolute right-1 cursor-pointer' />
                    <input type="text" placeholder='Comment...' className='text-base w-full outline-none bg-pinkWhite p-1 px-3 rounded-xl' />
                </div>
            </div>

        </section>
    )
}

export default Posts