import React, {useContext, useState} from 'react';
import logo from '../../../assets/logo.png';
import {Link, useNavigate} from 'react-router-dom';
import {FaRegWindowClose, FaBars} from 'react-icons/fa';
import {AuthContext} from '../../../providers/AuthProvider';
import {FaUser} from 'react-icons/fa';

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    const {user, logOutUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogoutUser = () => {
        logOutUser()
            .then(() => {navigate('/');})
            .catch()
    }

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link className='flex items-center' to='/'>
                            <img className='h-[40px]' src={logo} alt="" /> <p className='text-xl font-bold'>Chefer</p>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? <FaRegWindowClose /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-bold">
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                {
                                    user ? <button onClick={handleLogoutUser}>Log Out</button> :
                                        <Link to='/login'>Login</Link>
                                }
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                {user ? <img title={user.displayName} className='w-8 h-8 rounded-full' src={user.photoURL} alt="" /> : <FaUser />}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;