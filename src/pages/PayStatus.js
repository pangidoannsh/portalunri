import Navbar from '../components/Navbar'
import TopNavBar from '../components/TopNavBar'

export default function PayStatus() {
    return (
        <div className='flex min-h-screen bg-body'>
            <Navbar />
            <div className='flex-1' >
                <TopNavBar />
                <div className="lg:p-6 p-3">
                    <h1 className='text-4xl font-semibold'>Status Pembayaran</h1>
                </div>
            </div >
        </div>
    )
}
