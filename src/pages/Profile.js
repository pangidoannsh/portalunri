import React from 'react'
import Navbar from '../components/Navbar'
import TopNavBar from '../components/TopNavBar'

export default function Profile() {
    return (
        <div className='flex min-h-screen bg-body'>
            <Navbar />
            <div className='flex-1' >
                <TopNavBar />
                <div className="lg:p-6 p-3">
                    <h1 className='text-4xl font-semibold'>Profile</h1>
                </div>
            </div >
        </div>

    )
}
