"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg'
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [sideNav, setSideNav] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'mission', label: 'mission and vission' },
        { id: 'contact', label: 'Contact us' },
    ];

    
    const closeSideNav = () => {
        setSideNav(false);
    };

    return (
        <header className={`nav-header`}>
            <div className="container">
                <nav className="navbar d-none d-sm-block">
                    <div className="d-flex justify-content-between w-100">
                        <div className="logo ">
                            <Image src={logo} height={50} width={100} alt='logo' />
                        </div>
                        <div className="list d-flex align-items-center text-capitalize">
                            <ol>
                                {navItems.map((item) => (
                                    <li key={item.id} className="nav-items fs-16">
                                        <Link href={`#${item.id}`} className='underline-on-hover'>{item.label}</Link>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </nav>
            </div>

            
            {/* Mobile View */}
            <nav className="navbar d-block d-sm-none">
                <div className="d-flex justify-content-between w-100 px-1 py-0">
                    <div className="logo">
                            <Image src={logo} height={50} width={100} alt='logo' />

                    </div>
                    <button
                        className={`clearbtn ${sideNav ? 'rotate-icon rotate180' : 'rotate-icon'}`}
                        onClick={() => {
                            setSideNav(!sideNav);
                        }}
                    >
                        {sideNav ? (
                            <span className='px-2'>
                                <IoClose size={23} />
                            </span>
                        ) : (
                            <FiMenu size={20} />
                        )}
                    </button>


                </div>
            </nav>

            {/* Mobile Menu */}
            <aside className={`mobile-menu${sideNav ? ' open' : ''}`}>
                <nav className="navbar">
                    <div className="list">
                        <ol className="d-flex flex-column">
                            {navItems.map((item) => (
                                <li key={item.id} className="nav-items fade-in">
                                    <Link href={`#${item.id}`} onClick={closeSideNav}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                </nav>
            </aside>
        </header>
    );
};

export default Navbar;
