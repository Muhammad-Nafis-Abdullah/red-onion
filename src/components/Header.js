import React from 'react';
import { NavLink } from 'react-router-dom';
import NavIcon from '../images/logo2.png';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import Banner from '../images/bannerbackground.png'


const Header = () => {
    return (
        <div>
            <header className='container flex justify-between items-center px-5 h-16'>
                <img className='h-8' src={NavIcon} alt="" />
                <nav className='flex justify-center items-center gap-5'>
                    <NavLink to="/cart"><ShoppingCartIcon className='h-7'/></NavLink>
                    <NavLink className='font-medium hover:underline underline-offset-4 decoration-[3px]' to="/login">Login</NavLink>
                    <NavLink className='text-white font-medium px-5 py-1 rounded-full bg-rose-500 hover:ring-4 ring-rose-400 ring-offset-1 duration-200 active:scale-95' to="/register">Register</NavLink>
                </nav>
            </header>
            <div className={``}>

            </div>
        </div>
    );
};

export default Header;