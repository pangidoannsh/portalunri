import { useEffect } from "react"
import MoreLink from "../components/MoreLink";
import ProgresBar from "../components/ProgresBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../components/Navbar";
import TopNavBar from "../components/TopNavBar";


export default function Home() {
    AOS.init();
    useEffect(() => {
        document.title = 'Portal Akademik UNRI'
    }, []);
    const studies = [
        { subject: 'Probabilitas dan Statistik', grade: 'A' },
        { subject: 'Jaringan Komputer', grade: 'A' },
        { subject: 'Komputer Grafis', grade: '-A' },
        { subject: 'Desain dan Pemrogramman Web', grade: 'A' },
        { subject: 'Pengembangan Berbasis Platform', grade: 'A' },
        { subject: 'Basis Data Lanjut', grade: 'A' },
        { subject: 'Etika Profesi', grade: '-A' },
    ]
    const gradePoints = [
        {
            year: 'Ganjil 2020/2021',
            ip: '3.45',
            ipk: '3.45',
            payStatus: 'Lunas',
        },
        {
            year: 'Genap 2020/2021',
            ip: '3.62',
            ipk: '3.54',
            payStatus: 'Lunas',
        },
        {
            year: 'Ganjil 2021/2022',
            ip: '3.74',
            ipk: '3.60',
            payStatus: 'Lunas',
        },
        {
            year: 'Genap 2021/2022',
            ip: '3.94',
            ipk: '3.70',
            payStatus: 'Lunas',
        }
    ]

    const schedule = [
        {
            subject: "Animasi & Pemodelan 3D",
            time: '08.00-11.20',
            room: 'Lab.RPL'
        },
        {
            subject: "Manajemen Proyek",
            time: '13.30-15.10',
            room: 'C320'
        }

    ]
    const paragraf = `Selamat Datang di Portal Akademik. 
    Portal Akademik adalah sistem yang memungkinkan para 
    civitas akademika Universitas Riau untuk menerima informasi 
    dengan lebih cepat melalui Internet. Sistem ini diharapkan 
    dapat memberi kemudahan setiap civitas akademika untuk 
    melakukan aktivitas-aktivitas akademik dan proses belajar 
    mengajar. Selamat menggunakan fasilitas ini.`

    return (
        <div className='flex min-h-screen bg-body'>
            <Navbar />
            <div className='flex-1'>
                <TopNavBar />
                <div className="lg:p-6 p-3">
                    {/* Row 1 */}
                    <div className="grid lg:grid-cols-2 lg:gap-6 gap-3">
                        {/* Greeting and Description */}
                        <div data-aos="zoom-in" className="hidden md:block card rounded-[10px] bg-white p-4">
                            <h3 className="font-semibold text-xl">Selamat Datang PANGIDOAN NUGROHO SYAHPUTRA HARAHAP</h3>
                            <p className="text-sm text-justify mt-3 leading-6 indent-6">{paragraf}</p>
                        </div>
                        {/* Nilai Semester */}
                        <div data-aos="zoom-in" data-aos-delay="100" className="card rounded-[10px] bg-white p-4">
                            <div className="grid md:grid-cols-2 gap-6 items-end">
                                <div className=" md:order-1 order-2 md:-mt-0 -mt-16 md:mb-0 mb-4">
                                    {/* Table Nilai */}
                                    <h3 className="font-semibold text-xl mb-3">Nilai Semester Terbaru</h3>
                                    {studies.map((studi, index) => (
                                        <div key={index} className={`flex justify-between items-center text-xs ${index % 2 === 0 && 'bg-primary-blue bg-opacity-10'}`}>
                                            <div className="p-1">{studi.subject}</div>
                                            <div className="text-end p-1">{studi.grade}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Grafik */}
                                <div className=" order-1 md:order-2">
                                    <h3 className="font-bold text-xl mb-3 md:hidden block">Index Prestasi</h3>
                                    <div className="flex justify-center">
                                        <ProgresBar width={205} height={205} value={3.93} />
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <MoreLink link={'/khs'} />
                            </div>
                        </div>
                    </div >
                    {/* Row 2 */}
                    <div className="grid grid-cols-12 lg:gap-6 gap-3 lg:py-6 py-3">
                        {/* Col 1 */}
                        <div className="lg:col-span-7 col-span-12">
                            {/* IP dan IPK */}
                            <div data-aos="zoom-in" data-aos-delay="200" className="card rounded-[10px] bg-white p-4 ">
                                <h3 className="font-semibold text-xl">IP dan IPK</h3>
                                <table className="mt-6">
                                    <thead className="bg-primary-blue bg-opacity-10 text-primary-blue ">
                                        <tr className="lg:text-base text-xs">
                                            <th className="lg:text-start lg:pl-8 lg:w-36 font-medium">Semester</th>
                                            <th className="font-medium">IP Semester</th>
                                            <th className="font-medium">IPK</th>
                                            <th className="font-medium">Status Bayar</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {gradePoints.map((gradePoint, index) => (
                                            <tr key={index} className='lg:text-sm text-2xs'>
                                                <td className="lg:p-2 py-2 md:px-4 xs:px-2 ">{gradePoint.year}</td>
                                                <td className="text-center px-4 py-2">{gradePoint.ip}</td>
                                                <td className="text-center px-4 py-2">
                                                    <span className={`py-1 px-3 text-white font-semibold bg-primary-green rounded-md`}>{gradePoint.ipk}</span>
                                                </td>
                                                <td className="text-center px-4 py-2">{gradePoint.payStatus}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="lg:col-span-5 col-span-12">
                            {/* Jadwal Mahasiswa */}
                            <div data-aos="zoom-in" data-aos-delay="300" className="card rounded-[10px] bg-white p-4">
                                <h3 className="font-semibold text-xl">Jadwal Mahasiswa</h3>
                                <div className="mt-6">
                                    <div className="text-primary-blue text-xl">Senin</div>
                                    <div className="my-4">
                                        {schedule.map((item, index) => (
                                            <div key={index} className='mt-2'>
                                                <div className="text-base">{item.subject}</div>
                                                <div className="flex justify-between mb-2">
                                                    <div className="text-xs text-gray-400">{item.time}</div>
                                                    <div className="text-xs text-primary-blue text-end">{item.room}</div>
                                                </div>
                                                <hr />
                                            </div>
                                        ))}
                                    </div>
                                    <MoreLink link={'/jadwal'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
