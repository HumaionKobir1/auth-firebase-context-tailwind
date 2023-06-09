import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error.message))
    }
    return (
        <div className='bg-primary'>
            <div className='container mx-auto'>
                <div className="navbar text-white">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-2xl">Auth Master</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                        <li className='normal-case text-xl'><Link to="/">Home</Link></li>
                        <li className='normal-case text-xl'  tabIndex={0}>
                            <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul className="p-2 bg-base-100 text-black">
                            <li><Link>Submenu 1</Link></li>
                            <li><Link>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li className='normal-case text-xl'><Link to="/login">Login</Link></li>
                        <li className='normal-case text-xl'><Link to="/register">Register</Link></li>
                        <li className='normal-case text-xl'><Link to="/order">Order</Link></li>
                        { user && <li className='normal-case text-xl'><Link to="/profile">Profile</Link></li>}
                        {
                            user ? 
                                <div className='mt-3 ml-2'>
                                    <span>{user.email}</span>
                                    <button onClick={handleLogOut} className='btn btn-xs ml-2'>Sign out</button>
                                </div>
                            : <Link className='ml-5 btn btn-xs mt-3' to="/login">Login</Link>
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;