import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { LuLogOut, LuUsers } from "react-icons/lu";
import { MdManageSearch } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase.config';

const AsideNavbar = () => {
    
    const [active, setActive] = useState('manage');
   const navigate = useNavigate()
    const handleActive = async (item) => {
        setActive(item);
        if(item === 'logout'){
            try {
                 await signOut(auth)
                navigate("/login")
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                  });
            }
        }
    };


    return (
        <div className=' w-1/5'>
            <div className='pt-2'>
                <h2 className='text-xl font-bold text-center text-[#F33823]'>Dev Cluster</h2>
            </div>

            <div className='bg-[#FFFCFB] mt-[120px] ml-4'>
                <Link to="/add-student">
                   <p onClick={()=> handleActive("add")} className={`rounded-md flex items-center ${active === 'add' ? "text-white bg-[#F33823]": ""} px-[24px] py-[12px] my-2`}> <span className='mx-2' ><LuUsers className='w-[24px] h-[24px]' /> </span> Add Student</p>
                </Link>
                <Link to="/Manage-Student">
                    <p onClick={()=> handleActive("manage")} className={`border  ${active === 'manage' ? "text-white bg-[#F33823]": ""} rounded-md my-2 flex items-center px-[24px] py-[12px]`}> <span className='mx-2' ><MdManageSearch  className='w-[24px] h-[24px]' /> </span> Manage Students</p>
                </Link>
                <Link >
                    <p onClick={()=> handleActive("logout")}className={` my-2 rounded-md flex items-center px-[24px] py-[12px] ${active === 'logout' ? "text-white bg-[#F33823]": ""} `}> <span className='mx-2' ><LuLogOut  className='w-[24px] h-[24px]' /> </span> Logout</p>
                </Link>
                
            </div>
        </div>
    );
};

export default AsideNavbar;