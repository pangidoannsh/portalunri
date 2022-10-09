import Navbar from '../components/Navbar'
import TopNavBar from '../components/TopNavBar'

export default function Transcript() {
    return (
        <div className='flex min-h-screen bg-body'>
            <Navbar />
            <div className='flex-1' >
                <TopNavBar />
                <div className="lg:p-6 p-3">
                    <h1 className='text-4xl font-semibold'>Kartu Rencana Studi</h1>
                </div>
            </div >
        </div>
    )
}
