import React from 'react';
import { NavLink, Link } from 'react-router';
import logo from '../../assets/book-shelf_8766963.png'
import { AuthContext } from '../../authProvider/AuthProvider';
import { use } from 'react';
import toast from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';


const Navbar = () => {

    const { user, signOutUser, setUser } = use(AuthContext)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {

                toast.success('Logged Out Succesfully')
                setUser(null)
            }).catch((error) => {
                console.log(error)
            });
    }

    const links = <>
        <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'text-primary font-bold' : 'text-base-content'}
        >
            <li className='hover:bg-base-200 p-2 rounded-lg transition-all duration-200'>Home</li>
        </NavLink>
        <NavLink
            to="/allbooks"
            className={({ isActive }) => isActive ? 'text-primary font-bold' : 'text-base-content'}
        >
            <li className='hover:bg-base-200 p-2 rounded-lg transition-all duration-200'>All Books</li>
        </NavLink>
        {
            user &&
            <>
                <NavLink
                    to="/addbook"
                    className={({ isActive }) => isActive ? 'text-primary font-bold' : 'text-base-content'}
                >
                    <li className='hover:bg-base-200 p-2 rounded-lg transition-all duration-200'>Add Book</li>
                </NavLink>
                <NavLink
                    to="/mybooks"
                    className={({ isActive }) => isActive ? 'text-primary font-bold' : 'text-base-content'}
                >
                    <li className='hover:bg-base-200 p-2 rounded-lg transition-all duration-200'>My Books</li>
                </NavLink>
            </>
        }
        <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'text-primary font-bold' : 'text-base-content'}
        >
            <li className='hover:bg-base-200 p-2 rounded-lg transition-all duration-200'>About</li>
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'text-primary font-bold' : 'text-base-content'}
        >
            <li className='hover:bg-base-200 p-2 rounded-lg transition-all duration-200'>Contact</li>
        </NavLink>
    </>



    return (
        <div>
            <div className="navbar bg-base-100 fixed top-0 shadow-sm z-10 border-b border-base-200" id="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow-lg border border-base-200">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link to="/"><img className='h-10 pl-2' src={logo} alt="" /></Link>
                        <div className="form-control">
                            <label className="flex cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="sun-icon">
                                    <circle cx="12" cy="12" r="5" />
                                    <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                </svg>
                                <input type="checkbox" className="toggle theme-controller" id="theme-toggle" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="moon-icon">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">

                    {
                        user ? <div className='flex items-center gap-4 ml-5'>
                            <div className='flex flex-col items-center'>

                                <div className="dropdown dropdown-center">
                                    <div tabIndex={0} role="button" className="cursor-pointer m-1">

                                        <img
                                            data-tooltip-id="bookTooltip"
                                            data-tooltip-content={user.displayName}
                                            src={user.photoURL ? user.photoURL : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"}
                                            alt="Profile"
                                            className="w-10 h-10 rounded-full  border border-orange-300 shadow-md "
                                        />
                                    </div>
                                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-lg border border-base-200">
                                        <li className='ml-5 font-semibold text-base-content'>{user.displayName}</li>
                                    </ul>
                                </div>


                                <Tooltip id="bookTooltip" place="left" effect="solid" />
                            </div>
                            <Link to="/login"><div onClick={handleSignOut} className="btn btn-error btn-sm text-white border-none bg-red-500 hover:bg-red-700 transition-all duration-200">Log Out</div> </Link>
                        </div> :
                            <Link to="/login"><div className="btn btn-primary btn-sm text-white border-none hover:bg-primary-focus transition-all duration-200">Login</div> </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;