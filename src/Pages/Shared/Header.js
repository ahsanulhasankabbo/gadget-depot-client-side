import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/blogs'>Blogs</Link> </li>
        <li><Link to='/myportfolio'>MyPortfolio</Link> </li>
        <li>
            {
                user ? <>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to=''>{user?.displayName}</Link>
                <Link to=''><button onClick={logOut}>Signout</button></Link>
                </>: 
                <Link to='/login'>Login</Link>
            }
        </li>
    </>
    return (
        <div className="navbar bg-slate-800 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="bg-slate-800 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Gadget Depot</Link>
            </div>
            <div className="navbar-end hidden lg:flex px-12">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
                <label tabIndex="1" for='dashboard-sidebar' className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;