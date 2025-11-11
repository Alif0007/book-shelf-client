import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { NavLink, useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const RegisterPage = () => {

    const { createUser, setUser, updateProfileUser } = use(AuthContext)
    const [error, setError] = useState("")
    const [showPass, setShowPass] = useState(false)

    const navigate = useNavigate()


    const handleToggle = (e) => {
        e.preventDefault()
        setShowPass(!showPass)

    }


    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photoUrl = form.url.value

        setError("")

        const passValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        if (!passValidation.test(password)) {
            setError("Password must contain an Uppercase letter, Lowercase letter, at least 6 character")
            return
        }


        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                setUser(user)
                toast.success('Registration Successful')
                navigate('/')

                // Update Profile
                const profile = {
                    displayName: name,
                    photoURL: photoUrl
                }

                updateProfileUser(user, profile).then(() => {
                    // Profile updated!
                    // ...
                    console.log("done")
                }).catch((error) => {
                    console.log(error)

                });

                // ...
            })
            .catch((error) => {
                setError(error.message)
                console.log(error.message)
            });
    }




    return (
        <div>
            <div>
                <div className="hero bg-base-200 min-h-screen">

                    <div className="hero-content flex-col lg:flex-row-reverse w-full">

                        <div className=" card bg-base-100  w-full max-w-md shadow-2xl">
                            <h1 className='text-3xl text-center py-4'> Register Form</h1>
                            <form onSubmit={handleRegister} className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label ">Name</label>
                                    <input required name="name" type="name" className="input w-full" placeholder="Name" />

                                    <label className="label ">Email</label>
                                    <input required name="email" type="email" className="input w-full" placeholder="Email" />

                                    <label className="label ">Photo URL</label>
                                    <input required name="url" type="url" className="input w-full" placeholder="Photo URL" />

                                    <label className="label">Password</label>
                                    <div className='relative'>
                                        <input required name="password"
                                            type={showPass ? "text" : "password"}
                                            className="input w-full"
                                            placeholder="Password" />
                                        <button onClick={handleToggle} className='absolute right-5 top-3.5 cursor-pointer'>
                                            {showPass ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>



                                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                                <div className='text-red-600'>
                                    {error && error}
                                </div>



                            </form>
                            <p className='text-center pb-5'>Already have an account, <NavLink to="/auth/login"><span className='font-bold text-blue-700'>Login </span> </NavLink> Here</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;