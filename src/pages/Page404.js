import React from 'react'

export default function Page404() {
    document.title = '404 | Not Found'
    return (
        <div className='flex h-screen items-center justify-center bg-primary-blue bg-opacity-10' >
            <h1 className='text-4xl font-medium text-primary-blue'>404 | Not Found</h1>
        </div >
    )
}
