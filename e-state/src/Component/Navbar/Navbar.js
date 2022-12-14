import React from 'react';
import logo from '../Assets/e-state-logo.png'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate('/');
        window.location.reload(false);
    }
    const menu = <>
        <li><Link to='/'>Rent</Link></li>
        <li><Link to='/'>Buy</Link></li>
        <li><Link to='/'>Sell</Link></li>
        <li><Link to='/'>Manage property</Link></li>
        <li><Link to='/'>Resources</Link></li>
    </>
    return (
        <div className="navbar__main  border-b py-2">
            <div className="container mx-auto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80">
                                {menu}
                            </ul>
                        </div>
                        <button onClick={handleNavigate}><img className='w-44' src={logo} alt="logo" /></button>
                        {/* <Link className='lg:mr-8 p-3' to='/'>E State</Link> */}
                        <div className='hidden lg:block'>
                            <ul className="menu menu-horizontal p-0">
                                {menu}
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <button className="btn btn-outline btn-primary mr-3">Login</button>
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;