import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Burger from './Burger'

export default function TopNavBar(props) {
    const [down, setDown] = useState(false);
    return (
        <div className={`bg-white ${props.isOpen ? 'md:py-7' : 'md:py-[26px]'}`}>
            <div className={` hidden md:flex md:justify-center xs:justify-end md:gap-x-8 lg:gap-x-20`}>
                <NavLink>Panduan</NavLink>
                <NavLink>Beasiswa</NavLink>
                <NavLink>Informasi Akademik</NavLink>
                <button className="relative" onClick={() => setDown(!down)}>
                    <div className="flex items-center gap-x-2">
                        <div>MBKM</div>
                        <Icon icon="akar-icons:chevron-down" className={`${down && 'rotate-180'} duration-500`} />
                    </div>
                    <div className={`absolute overflow-hidden duration-300 ${down ? 'h-52' : 'h-0'}`}>
                        <div className="card shadow-lg z-10 bg-white p-4 gap-2">
                            <Link>Testing</Link>
                            <Link>Testing</Link>
                            <Link>Testing</Link>
                            <Link>Testing</Link>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}
