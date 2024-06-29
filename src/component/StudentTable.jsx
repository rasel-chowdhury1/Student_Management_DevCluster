import React from 'react';
import { LuEye } from "react-icons/lu";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

const StudentTable = ({studentData}) => {
    return (
        <div className=''>
            <div className='border-2 rounded-md'>
            <table className="w-full  ">
                <thead className='bg-[#F33823] rounded-tl-lg rounded-tr-lg text-white'>
                    <tr>
                    <th className='py-2'>Name</th>
                    <th className='py-2'>Class</th>
                    <th className='py-2'>Roll No.</th>
                    <th className='py-2'>View / Edit / Delete</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        studentData.map((item,index) => <tr key={index} className={`${index % 2 !== 0 ? 'bg-[#FFF6F5]' : ''}`}>
                        <td className='py-2'>{item.firstName}</td>
                        <td>{item.class}</td>
                        <td>{item.rollNumber}</td>
                        <td>
                            <div className='flex items-center justify-center gap-10'>
                                <LuEye className='w-[24px] h-[24px] text-[#F33823]'/>
                                <RiEdit2Line className='w-[24px] h-[24px] text-[#F33823]' />
                                <RiDeleteBin6Line className='w-[24px] h-[24px] text-[#F33823]' />
                            </div>
                        </td>
                    </tr>)
                    }
                    
                </tbody>
                
            </table>
            </div>
            <div  className='bg-[#FFF6F5] mt-[4px] py-4'></div>
        </div>
    );
};

export default StudentTable;