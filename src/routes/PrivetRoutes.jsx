import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../providers/AuthProvider';

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(user);

    if (loading) {
        return <p>Loader...</p>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace />
};

export default PrivetRoutes;