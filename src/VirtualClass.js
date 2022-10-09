import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Course from './pages/Course'

export default function VirtualClass() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/course' element={<Course />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
