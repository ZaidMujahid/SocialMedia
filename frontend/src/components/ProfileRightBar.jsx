import React from 'react'
import { TfiLocationPin } from 'react-icons/tfi'
import { MdOutlineAccountCircle } from 'react-icons/md'

const ProfileRightBar = ({ user }) => {
    return (
        <div className='bg-white m-2 rounded-xl h-fit mt-5'>
            {/* information */}
            <section className='flex flex-col p-4 gap-2'>
                <div className='flex items-center gap-[2px] text-navy'>
                    <MdOutlineAccountCircle className='text-base' />
                    <p className='text-base font-semibold capitalize'>{user.username}</p>
                </div>
                <div className='flex items-center gap-[2px] text-navy'>
                    <TfiLocationPin className='text-base font-semibold' />
                    <p className='text-base font-semibold capitalize'>{user.from} </p>
                    <p className='text-base font-semibold capitalize'>{user.city || "Location"}</p>
                </div>
                <button className='bg-pinkWhite rounded-xl p-2 w-full text-navy'><span className='text-base font-semibold'>Follow</span><span className='hidden text-base font-semibold'>Unfollow</span></button>
            </section>
            {/* followings */}
            <section className='p-4'>
                <div>
                    <p className='text-lg text-center font-semibold my-4'>Following's</p>
                    <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy lg:px-[60px]'>
                        <MdOutlineAccountCircle />
                        <p>Zaid Mujahid</p>
                    </button>
                    <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy lg:px-[60px]'>
                        <MdOutlineAccountCircle />
                        <p>Zaid Mujahid</p>
                    </button>
                    <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy lg:px-[60px]'>
                        <MdOutlineAccountCircle />
                        <p>Zaid Mujahid</p>
                    </button>
                    <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy lg:px-[60px]'>
                        <MdOutlineAccountCircle />
                        <p>Zaid Mujahid</p>
                    </button>
                    <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy lg:px-[60px]'>
                        <MdOutlineAccountCircle />
                        <p>Zaid Mujahid</p>
                    </button>
                    <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy lg:px-[60px]'>
                        <MdOutlineAccountCircle />
                        <p>Zaid Mujahid</p>
                    </button>
                    <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy lg:px-[60px]'>
                        <MdOutlineAccountCircle />
                        <p>Zaid Mujahid</p>
                    </button>
                    <button className='flex gap-1 items-center p-2 text-[1.1rem] hover:bg-pinkWhite rounded-lg justify-center font-semibold text-navy lg:px-[60px]'>
                        <MdOutlineAccountCircle />
                        <p>Zaid Mujahid</p>
                    </button>
                    
                </div>
            </section>
        </div>
    )
}

export default ProfileRightBar