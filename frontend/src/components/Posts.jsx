import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { AiOutlineSend } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"
import user from "../assets/user.png"
import { format } from 'timeago.js';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Posts = ({ type, post }) => {
    // Handling props in tailwind CSS
    const imageWidth = {
        "profilePage" : "w-[500px]",
        "homePage": "w-[700px]"
    }

    const [like, setLike] = useState('')
    const [isliked, setisLiked] = useState(false)
    const [isCommentBtnClicked, setIsCommentBtnClicked] = useState(false)
    const [fetchedUser, setFetchedUser] = useState({})
    // const [postComment, setPostComment] = useState('')
    const {user:currentUser} = useContext(AuthContext)
    
    const likeHandler = () => {
        setLike(isliked ? like - 1 : like + 1)
        setisLiked(!isliked)
    }
    const commentHandler = ()=> {
        setIsCommentBtnClicked(!isCommentBtnClicked)
    }
    // const addComment = (e)=> {
    //     e.preventDefault()
    //     post.comments.append(postComment)
    // }
    useEffect(() => {
        const fetchUser = async ()=> {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setFetchedUser(res.data)
        }
        fetchUser();
    },[post.userId])
    


    return (
        <section className='bg-white m-2 rounded-xl'>
            {/* profile and name */}
            <div className='flex gap-2 p-4'>
                <Link to={`profile/${fetchedUser.username}`}>
                    <img src={fetchedUser.profilePicture || user} alt="img" className='w-[2.5rem] h-[2.5rem] rounded-[50%] m-[.5em]' />
                </Link>
                <div className='flex flex-col justify-center'>
                    <p className='text-sm font-semibold text-navy'>{fetchedUser.username}</p>
                    <p className='text-[.7rem] font-medium'>{format(fetchedUser.createdAt)}</p>
                </div>
            </div>
            {/* description and image */}
            <div>
                <p className='text-base text-navy font-semibold px-4'>{post.desc}</p>
                <img src={post.img} alt="mountain" className={`p-4 ${imageWidth[type]}`} />
            </div>

            {/* like and comment */}
            <div className='flex gap-2 px-4 pb-4 items-center'>
                <div className='flex items-center gap-[2px]'>
                    {!isliked && <AiOutlineHeart className='text-xl cursor-pointer' onClick={likeHandler} />}
                    {isliked && <AiFillHeart className='text-xl cursor-pointer text-navy' onClick={likeHandler} />}
                    <span className='text-sm font-semibold'>{post.likes.length}</span>
                </div>
                <div className='flex items-center gap-[2px]'>
                    <BiCommentDetail className='text-xl cursor-pointer' onClick={commentHandler}/>
                    <span className='text-sm font-semibold'>{post.comments.length}</span>
                </div>
                <div className='flex items-center basis-[90%] relative'>
                    <AiOutlineSend className='text-xl absolute right-1 cursor-pointer' />
                    <input type="text" placeholder='Comment...' className='text-base w-full outline-none bg-pinkWhite p-1 px-3 rounded-xl'/>
                </div>
            </div>
            {isCommentBtnClicked && <div className='mx-4 mb-4 mt-2'>
                {post.comments.map((comment) => (
                    <p className='text-base text-navy font-semibold px-4 border-b-[1px] mb-2'>{comment}</p>
                ))}
            </div>}
        </section>
    )
}

export default Posts