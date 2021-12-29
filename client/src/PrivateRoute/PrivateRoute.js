import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    
    if (isLoading) {
        return <div className='container mx-auto text-center text-5xl'>Loading...</div>;
    }

    if (!user?.email) {
        return <Navigate to="/authentication" state={{from:location}}/>;
    }

    return children;
};

export default PrivateRoute;