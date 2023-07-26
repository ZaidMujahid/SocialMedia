import React, { useState, useEffect } from 'react'
import CreatePost from './CreatePost'
import Posts from './Posts'
import axios from "axios"

const Feed = () => {
  const [fetchedPosts, setFetchedPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async ()=> {
      try {
        const res = await axios.get("posts/timeline/64c0fc6cdf258e4bdf4a8643");
        setFetchedPosts(res.data)
        console.log(res);
        console.log(fetchedPosts); 
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  },[])
  
  return (
    <div className='flex flex-col gap-2'>
      <CreatePost />
      {fetchedPosts.map((p)=>{
        <Posts key={p.id} type="homePage" post={p}/>
      })}
    </div>
  )
}

export default Feed