import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopNavBar from './components/TopNavBar';
import { Home, Profile, Krs, Khs, Transcript, PayStatus, Page404 } from '../src/pages'


function App() {
  const userData = {
    name: 'Pangidoan Nugroho Syahputra Harahap',
    nim: '2007113796',
    prodi: 'Teknik Informatika - FT',
    img: './storage/pp.jpg',
  }

  return (
    <div className='flex min-h-screen bg-body'>

      <BrowserRouter>
        <Navbar user={userData} />
        <div className='flex-1'>
          <TopNavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/krs' element={<Krs />} />
            <Route path='/khs' element={<Khs />} />
            <Route path='/transkrip' element={<Transcript />} />
            <Route path='/paystatus' element={<PayStatus />} />
            <Route component={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div >
  );
}

export default App;
