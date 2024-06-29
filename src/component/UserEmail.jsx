import React from 'react';
import { FiUser } from "react-icons/fi";
import { auth } from '../Firebase/Firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';

const UserEmail = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='flex justify-between'>
            <div></div>
            <p className='flex items-center border-2 p-[12px] rounded-md bg-[#FFFCFB] m-6 px-8'><FiUser className='w-[24px] h-[24px] mx-4' /> {user?.email}</p>
        </div>
    );
};

export default UserEmail;