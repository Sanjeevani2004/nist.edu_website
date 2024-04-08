import React from 'react';
import {useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/authContext/context';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    return (
        <nav className='flex items-center justify-between flex-wrap bg-slate-950 p-3'>
            {userLoggedIn ? (
                <button onClick={() => { doSignOut().then(() => { navigate('/') }) }} className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-sky-500 mt-2 lg:mt-0'>Logout</button>
            ) : null}
        </nav>
    );
}

export default Header;
