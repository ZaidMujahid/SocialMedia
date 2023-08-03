import React from 'react'
import Feed from '../components/Feed'
import "../index.css"
import Leftbar from '../components/Leftbar'

const Home = () => {
  return (
    <div className="flex justify-center gap-4">
        <Leftbar />
        <Feed type="homePage"/>
    </div>
  )
}

export default Home