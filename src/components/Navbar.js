import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'
import { cutText } from '../utils/Tools';

export default function Navbar(props) {
    const [open, setOpen] = useState(() => {
        if (window.innerWidth >= 768) {
            return true
        }
        return false
    });
    const [show, setShow] = useState(() => {
        if (window.innerWidth >= 768) {
            return true
        }
        return false
    });
    const [openVC, setOpenVC] = useState(false);

    let location = useLocation();

    const menus = [
        { path: '/', name: "Halaman Depan", icon: "ci:home-fill" },
        { path: '/profile', name: "Profile", icon: "codicon:account" },
        { path: '/krs', name: "Kartu Rencana Studi", icon: "carbon:result" },
        { path: '/khs', name: "Kartu Hasil Studi", icon: "teenyicons:certificate-outline" },
        { path: '/transkrip', name: "Transkrip Nilai", icon: "gg:transcript" },
        { path: '/paystatus', name: "Status Pembayaran", icon: "fluent:payment-28-regular" },
    ]
    const virtualClass = [
        { path: '/course', name: "Materi Kuliah", icon: "codicon:account" },
        { path: '/coursework', name: "Tugas Kuliah", icon: "carbon:result" },
        { path: '/discucion', name: "DIskusi Online", icon: "octicon:comment-discussion" },
        { path: '/filesharing', name: "File Sharing", icon: "akar-icons:file" },
        { path: '/reference', name: "Referensi", icon: "carbon:notebook-reference" },
    ]

    const activeLink = ' bg-primary-blue bg-opacity-10 text-primary-blue font-semibold';
    const normalLink = 'text-gray-400 font-normal';

    const handleSlideSidebar = () => {
        setOpen(!open)
        if (show) {
            setShow(!show)
        } else {
            setTimeout(() => {
                setShow(!show)
            }, 300);
        }
    }

    return (

        <div className={`w-14 ${open ? 'lg:w-72 md:w-64' : 'md:w-20'} duration-300`}>
            <div className="fixed z-10 bg-white" >
                <div className={`${open ? 'lg:w-72 md:w-64 w-56' : 'md:w-20 w-14'} duration-300 h-screen overflow-y-scroll`}>
                    {/* Button Slide */}
                    <button className='absolute w-7 h-12 -right-7 md:top-[50%] sm:top-[43%] top-0
                    bg-primary-blue rounded-r-lg bg-opacity-10  text-primary-blue'
                        onClick={handleSlideSidebar}>
                        <Icon icon="akar-icons:chevron-left" className={`ml-1 duration-200 ${!open && 'rotate-180'}`} />
                    </button>
                    {/* Logo */}
                    <div className={`flex gap-x-2 items-center md:h-[75px] ${open ? 'md:py-3 md:px-6 p-3' : 'md:p-4 p-2 justify-center'}`}>
                        <div className='text-center'>
                            <img src={logo} className='md:w-11 w-9' />
                        </div>
                        <div className={` ${!show && 'hidden'}`}>
                            <h1 className='lg:text-lg md:text-base uppercase text-md font-bold  m-0 p-0'>Portal Akademik</h1>
                            <p className='md:text-sm text-xs font-semibold  m-0 p-0'>Universitas Riau</p>
                        </div>
                    </div>
                    {/* Profile */}
                    <div className={`bg-primary-blue bg-opacity-10 md:py-4 py-2 ${open ? 'md:px-6 px-4' : 'md:px-2 px-1 flex align-items-center'}`}>
                        <div className="flex items-center gap-x-2">
                            {/* photo */}
                            <div className=" w-16">
                                <div className={`${open ? 'w-16 h-16' : 'md:w-14 md:h-14 w-11 h-11'} flex justify-center items-center border-2
                             border-primary-blue rounded-full`}>
                                    <div className={`photo-profile duration-300 rounded-full ${open ? 'w-14 h-14' : 'md:w-12 w-9 md:h-12 h-9'}`}
                                        style={{ backgroundImage: 'url(' + props.user.img + ')' }}>
                                    </div>
                                </div>
                            </div>
                            <div className={`${!show && 'hidden'}`}>
                                {/* Name */}
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} className='text-primary-blue font-semibold md:text-base text-xs leading-tight'>
                                        {cutText(props.user.name)}
                                    </div>
                                    {/* Complete Name */}
                                    <div tabIndex={0} className="dropdown-content menu p-2 shadow
                                 bg-primary-blue bg-opacity-10 glass text-primary-blue rounded-lg ">
                                        <div>{props.user.name}</div>
                                    </div>
                                </div>
                                {/* NIM */}
                                <div className='text-primary-blue font-normal md:text-sm text-xs mt-1'>{props.user.nim}</div>
                            </div>

                        </div>
                        <div className={`${show ? 'h-4' : 'hidden'} mt-3`}>
                            <div className="text-green-500 font-semibold md:text-sm text-2xs uppercase">{props.user.prodi}</div>
                        </div>
                    </div>

                    {/* Main Menu */}
                    <ul className={`md:mt-4 mt-3 duration-500 overflow-y-hidden ${openVC ? 'h-1' : 'md:h-[335px]'}`}>
                        {menus.map((menu, index) => (
                            <li key={index} className={`py-1 ${open ? 'px-4' : 'px-2'}`}>
                                <NavLink to={menu.path}
                                    className={`${location.pathname === menu.path ? activeLink : normalLink}
                                    flex items-center rounded-lg hover:text-primary-blue
                                    text-base py-3 ${open ? 'px-4' : 'px-2 justify-center'}`}>
                                    <Icon icon={menu.icon} className='md:text-2xl text-base' />
                                    <span className={`ml-6 md:text-base text-xs ${!show && 'hidden'}`}>{menu.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <hr className='m-4' />
                    <div className={`flex ${open ? 'justify-between' : 'justify-center'} px-6 `}>
                        <div className={`text-primary-blue text-base ${!show && 'hidden'}`}>Virtual Class </div>
                        <button className={`text-primary-blue md:block hidden ${openVC && 'rotate-180'} duration-300`}
                            onClick={() => setOpenVC(!openVC)}><Icon icon="akar-icons:chevron-up" /></button>
                    </div>
                    {/* Virtual Class Menu */}
                    <ul className={`md:mt-4 mt-3 duration-300 overflow-y-hidden`}>
                        {virtualClass.map((menu, index) => (
                            <li key={index} className={`py-1 ${open ? 'px-4' : 'px-2'}`}>
                                <NavLink to={menu.path}
                                    className={`${location.pathname === menu.path ? activeLink : normalLink}
                                    flex items-center rounded-lg hover:text-primary-blue
                                    text-base py-3 ${open ? 'px-4' : 'px-2 justify-center'}`}>
                                    <Icon icon={menu.icon} className='md:text-2xl text-base' />
                                    <span className={`ml-6 md:text-base text-xs ${!show && 'hidden'}`}>{menu.name}</span>
                                </NavLink>
                            </li>

                        ))}
                    </ul>
                </div>
            </div >
        </div >
    )
}
