import React, { useContext } from 'react';
import { AuthProvider } from '../provider/Provider';
import { Navigate } from 'react-router-dom';

const PriviateRoute = ({children}) => {
  
    const {user,loader}=useContext(AuthProvider)
    if(loader){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PriviateRoute;