import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase/Firebase.config';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user?.email)
    const location = useLocation()
    
    console.log({user})
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      
    if(user){
        return children;
    }
    return (<Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;