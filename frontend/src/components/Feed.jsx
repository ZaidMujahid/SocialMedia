import React, { useState, useEffect } from 'react'
import CreatePost from './CreatePost'
import Posts from './Posts'
import axios from "axios"

const Feed = ({ type, username }) => {
  const [fetchedPosts, setFetchedPosts] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const res = username 
      ? await axios.get(`/posts/profile/` + username)
      : await axios.get("/posts/timeline/64c0fc6cdf258e4bdf4a8643")
      setFetchedPosts(res.data)
    }
    fetchPost();
  }, [username])

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