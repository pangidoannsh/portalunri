import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Profile, Krs, Khs, Transcript, PayStatus, Course, Page404 } from '../pages'

function Routers() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/krs' element={<Krs />} />
                <Route path='/khs' element={<Khs />} />
                <Route path='/transkrip' element={<Transcript />} />
                <Route path='/paystatus' element={<PayStatus />} />
                <Route path='/course' element={<Course />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </Router>
    )
}

export default Routers