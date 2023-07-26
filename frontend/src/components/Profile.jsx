import React from 'react'
import Leftbar from './Leftbar.jsx'
import Feed from './Feed.jsx'
import ProfileRightBar from './ProfileRightBar.jsx'
import mountain from '../assets/1.jpg'
import profile from "../assets/1p.jpg"
import '../style.css'
import CreatePost from './CreatePost.jsx'
import Posts from './Posts.jsx'


const Profile = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div><Leftbar /></div>
                <section>
                    <div className='relative h-[400px] bg-white rounded-xl m-2 mt-5'>
                        <img src={mountain} alt="mountain  " className='h-[300px] w-[800px] rounded-3xl p-2' />
                        <img src={profile} alt="profile" className='rounded-full h-[125px] w-[125px] profilePic border-4 border-white' />
                        <p className='profileName text-base font-semibold'>Zaid Mujahid</p>
                    </div>

                    <div className='flex justify-center'>
                        <div className='flex flex-col'>
                            {/* I could have directly rendered Feed comp over here but I have to pass props thats why I did this */}
                            <CreatePost />
                            <Posts type="profilePage" />
                            <Posts type="profilePage" />
                            <Posts type="profilePage" />
                            <Posts type="profilePage" />
                        </div>
                        <ProfileRightBar />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Profile