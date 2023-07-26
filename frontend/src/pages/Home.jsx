import React from 'react'
import Feed from '../components/Feed'
import "../style.css"
import Leftbar from '../components/Leftbar'

const Home = () => {
  return (
    <div className="flex justify-center gap-4">
        <Leftbar />
        <Feed />
    </div>
  )
}

export default Home