import React, { useState, useEffect, useContext } from 'react'
import CreatePost from './CreatePost'
import Posts from './Posts'
import axios from "axios"
import { AuthContext } from '../context/AuthContext'


const Feed = ({ type, username }) => {
  const [fetchedPosts, setFetchedPosts] = useState([])
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchPost = async () => {
      const res = username 
      ? await axios.get(`/posts/profile/` + username)
      : await axios.get(`/posts/timeline/` + user._id)
      setFetchedPosts(res.data)
    }
    fetchPost();
  }, [username, user._id])

  return (
    <div className='flex flex-col gap-2'>
      <CreatePost />
        {fetchedPosts.map((p) => (
          <Posts key={p._id} post={p} type={type} />
        ))}
    </div>
  )
}

export default Feed