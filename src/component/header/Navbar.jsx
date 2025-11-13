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
        <NavLink to="/"><li className=' text-lg'>Home</li></NavLink>
        <NavLink to="/allbooks"><li className=' text-lg'>All Books</li></NavLink>
        {
            user &&
            <>
                <NavLink to="/addbook"><li className=' text-lg'>Add Book</li></NavLink>

                <NavLink to="/mybooks"><li className=' text-lg'>My Books</li></NavLink>
            </>


        }
    </>



    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow">
                            {links}
                        </ul>
                    </div>
                    <div>
                        <Link to="/"><img className='h-10 pl-2' src={logo} alt="" /></Link>
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
                                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li className='ml-5 font-semibold'>{user.displayName}</li>
                                        <li><label className="flex cursor-pointer gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="5" />
                                                <path
                                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                            </svg>
                                            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                            </svg>
                                        </label></li>

                                    </ul>
                                </div>


                                <Tooltip id="bookTooltip" place="left" effect="solid" />
                            </div>
                            <Link to="/login"><div onClick={handleSignOut} className="btn bg-red-600 text-white">Log Out</div> </Link>
                        </div> :
                            <Link to="/login"><div className="btn bg-blue-600 text-white">Login</div> </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;