import React, { use } from 'react';
import { AuthContext } from '../authProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router';
// import { AuthContext } from '../authProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center h-screen'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;