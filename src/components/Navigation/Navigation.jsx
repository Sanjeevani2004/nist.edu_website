import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './nist.png';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false); // State to manage the visibility of the navigation links
    const navigate = useNavigate();

    const toggleMenu = () => {
        setShowMenu(!showMenu); // Toggle the state when the button is clicked
    };

    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-slate-950 p-3">
                <div className="flex items-center flex-shrink-0 text-white mr-16">
                    <img src={logo} className="fill-current colour-white h-20 w-30 mr-4" alt="NIST University Logo" />
                    <span className="font-semibold font-['Open_Sans'] tracking-normal text-3xl tracking-tight mr-10">NIST University</span>
                </div>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${showMenu ? '' : 'hidden'}`}>
                    <div className="text-sm lg:flex-grow">
                        <a href="/" className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
                            Home
                        </a>
                        <a href="/about" className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
                            About
                        </a>
                        <a href="/courses" className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
                            Courses
                        </a>
                        <a href="/contact" className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Contact Us
                        </a>
                    </div>
                    <div>
                        <a href="/signup" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-sky-500 mt-4 lg:mt-0 mr-4">Sign up</a>
                    </div>
                    <div>
                        <a href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-sky-500 mt-4 lg:mt-0">Sign in</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
