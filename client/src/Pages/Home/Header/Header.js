import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    return (
      <header className="bg-gradient-to-r from-teal-400 to-green-400">
            <div className="container mx-auto p-4 space-y-2 md:space-y-0 flex flex-col md:flex-row md:justify-between items-center">
                <img src="/images/logo.webp" alt="Logo"/>
                <nav className='flex flex-col md:flex-row space-x-4 space-y-2 md:space-y-0 text-xl text-white items-center'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    {
                        user?.email ? <>
                            <Link to="/dashboard">Dashboard</Link>
                        <button onClick={()=>logout()} className='inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white py-1 px-2 border-0 rounded text-base md:text-lg tracking-wide'>Logout <i className="fas fa-sign-out-alt"></i></button>
                        </> : <Link to="/authentication" className='inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white py-1 px-2 border-0 rounded text-base md:text-lg tracking-wide'>Login <i className="fas fa-sign-in-alt"></i></Link>
                    }
                </nav>
          </div>
      </header>
    );
};

export default Header;