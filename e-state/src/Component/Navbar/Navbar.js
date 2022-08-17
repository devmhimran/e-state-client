import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <li><Link to='/'>Rent</Link></li>
        <li><Link to='/'>Buy</Link></li>
        <li><Link to='/'>Sell</Link></li>
        <li><Link to='/'>Manage property</Link></li>
        <li><Link to='/'>Resources</Link></li>
    </>
    return (
        <div className="navbar__main  border-b">
            <div className="container mx-auto">
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link className='lg:mr-8 p-3' to='/'>E State</Link>
                    <ul class="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>

                <div class="navbar-end">
                    <button class="btn btn-outline btn-primary mr-3">Login</button>
                    <button class="btn btn-primary">Sign up</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;