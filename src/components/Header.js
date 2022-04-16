import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavIcon from '../images/logo2.png';
import { ShoppingCartIcon } from '@heroicons/react/solid';


const Header = () => {
    const navigate = useNavigate();


    return (
        <div>
            <header className='container flex justify-between items-center px-5 h-16'>
                <img className='h-8 cursor-pointer active:scale-95 duration-200' src={NavIcon} alt="" onClick={()=> navigate('/')}/>
                <nav className='flex justify-center items-center gap-5'>
                    <NavLink to="/cart"><ShoppingCartIcon className='h-7'/></NavLink>
                    <NavLink className='font-medium hover:underline underline-offset-4 decoration-[3px]' to="/login">Login</NavLink>
                    <NavLink className='text-white font-medium px-5 py-1 rounded-full bg-rose-500 hover:ring-4 ring-rose-400 ring-offset-1 duration-200 active:scale-95' to="/register">Register</NavLink>
                </nav>
            </header>

            <section className='banner container h-[calc(100vh-4rem)] flex flex-col flex-wrap justify-center items-center gap-10'>
                <h4 className='text-center'>Best Food is waiting for your belly</h4>
                <div className='border-2 border-orange-300 border-r-0 rounded-full bg-white'>
                    <input type="search" className='rounded-full bg-transparent py-1 px-3 placeholder:font-medium placeholder:text-lg focus:placeholder:blur-[1.5px] outline-none' placeholder='Search your food'/>
                    <button className='text-white rounded-full border-0 bg-rose-500 duration-200 py-1.5 scale-105'>Search</button>
                </div>
            </section>

            <nav className='flex justify-center items-center gap-8 mt-16 mb-10'>
                <NavLink to='/breakfast' className={(navObj)=> navObj.isActive?"link-active":"link"}>Breakfast</NavLink>
                <NavLink to='/lunch' className={(navObj)=> navObj.isActive?"link-active":"link"}>Lunch</NavLink>
                <NavLink to='/dinner' className={(navObj)=> navObj.isActive?"link-active":"link"}>Dinner</NavLink>
            </nav>
    </div>
    );
};

export default Header;