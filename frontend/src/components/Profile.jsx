import React, { useEffect, useState } from 'react'
import Leftbar from './Leftbar.jsx'
import Feed from './Feed.jsx'
import ProfileRightBar from './ProfileRightBar.jsx'
import user from "../assets/user.png"
import cover from "../assets/cover.jpg"
import '../index.css'
import axios from 'axios'
import { useParams } from "react-router"



const Profile = () => {
    const [fetchedUser, setFetchedUser] = useState({})
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async ()=> {
            const res = await axios.get(`/users?username=${username}`);
            setFetchedUser(res.data)
        }
        fetchUser();
    },[])
    return (
        <div>
            <div className='flex justify-center'>
                <div><Leftbar /></div>
                <section>
                    <div className='relative h-[400px] bg-white rounded-xl m-2 mt-5'>
                        <img src={fetchedUser.coverPicture || cover} alt="mountain  " className='h-[300px] w-[800px] p-2' />
                        <img src={fetchedUser.profilePicture || user} alt="profile" className='rounded-full h-[125px] w-[125px] profilePic border-4 border-white' />
                        <p className='profileName text-base font-semibold capitalize'>{fetchedUser.username}</p>
                    </div>

                    <div className='flex justify-center'>
                        <Feed type="profilePage" username={username}/>
                        <ProfileRightBar user={fetchedUser}/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Profile