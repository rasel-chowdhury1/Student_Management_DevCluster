import React, { useState } from 'react';
import { LuEye } from "react-icons/lu";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteStudent, updateStudent } from '../redux/features/students/studentSlice';
import { classArray } from '../utils/classes';
import { divisionArray } from '../utils/division';

const StudentTable = ({studentData}) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        studentClass: '',
        division: '',
        rollNumber: '',
        addressLine1: '',
        addressLine2: '',
        landmark: '',
        city: '',
        pincode: '',
        profilePicture: null,
      });


      const handleOpenDialog = (student, modalName) => {
        setFormData({
            firstName: student?.firstName || '',
            middleName: student?.middleName || '',
            lastName: student?.lastName || '',
            studentClass: student?.studentClass || '',
            division: student?.division || '',
            rollNumber: student?.rollNumber || '',
            addressLine1: student?.addressLine1 || '',
            addressLine2: student?.addressLine2 || '',
            landmark: student?.landmark || '',
            city: student?.city || '',
            pincode: student?.pincode || '',
            profilePicture: null,
          });
        document.getElementById(modalName).showModal();
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

      const {
        firstName,
        middleName,
        lastName,
        studentClass,
        division,
        rollNumber,
        addressLine1,
        addressLine2,
        landmark,
        city,
        pincode,
        profilePicture,
      } = formData;

      // handle close model 
  const handleCloseModelButton = (value) => {
    document.getElementById(value).close()
  }

  const handleDeletebutton = (roll) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(deleteStudent(roll))
          Swal.fire({
            title: "Deleted!",
            text: "Student has been deleted.",
            icon: "success"
          });
        }
      });
  }

  const handleUpdateButton = (e) => {
    e.preventDefault();
    dispatch(updateStudent(formData))
    handleCloseModelButton("edit")
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your student updated successfully",
        showConfirmButton: false,
        timer: 1500
      });
  }


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
                        <td>{item.studentClass}</td>
                        <td>{item.rollNumber}</td>
                        <td>
                            <div className='flex items-center justify-center gap-10'>
                                <LuEye onClick={() => handleOpenDialog(item, "details")} className='w-[24px] h-[24px] text-[#F33823]'/>
                                <RiEdit2Line onClick={() => handleOpenDialog(item, "edit")} className='w-[24px] h-[24px] text-[#F33823]' />
                                <RiDeleteBin6Line onClick={()=> handleDeletebutton(item.rollNumber+item.studentClass)} className='w-[24px] h-[24px] text-[#F33823]' />
                            </div>
{/** student edit or update modal start */}
<dialog id="edit" className="modal">
<div className="modal-box bg-white dark:bg-black">
<button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#0c01a1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton('edit')}>✕</button>
<h2 className="text-2xl font-bold mb-4 text-center">Update Student</h2>
<form onSubmit={handleUpdateButton}>
<div className='flex justify-between gap-4 my-2'>
<input type="text" name="firstName" id="" placeholder='First Name ' 
value={firstName}
onChange={handleChange}              
className='p-2 w-full border-2 rounded-md' required/>

<input type="text" name="middleName" id="" placeholder='Middle Name ' className='p-2 w-full border-2 rounded-md' 
value={middleName}
onChange={handleChange} 
required/>

<input type="text" name="lastName" id="" placeholder='Last Name ' className='p-2 w-full border-2 rounded-md' 
value={lastName}
onChange={handleChange}
required/>
</div>

<div className='flex justify-between gap-4 my-2'>
<select name="studentClass" id="studentClass"  className='p-2 w-full border-2 rounded-md'
value={studentClass}
onChange={handleChange}
required>
<option value="volvo">Select Class</option>
{classArray.map( cls => (
<option key={cls} value={cls}>Class {cls}</option>
))}
</select>
<select 
name="division" id="division"  className='p-2 w-full border-2 rounded-md' 
value={division}
onChange={handleChange}
required>
<option value="volvo">Select Division</option>
{divisionArray.map(division => (
<option key={division} value={division}>Division {division}</option>
))}
</select>
<input type="number" 
id="rollNumber"
name="rollNumber"
value={rollNumber}
onChange={handleChange}
placeholder='Enter Roll Number in Digits' className='p-2 w-full border-2 rounded-md' required min="1" max="99"/>
</div>

<div className='flex justify-between gap-4 mt-10'>
<textarea 
id="addressLine1"
name="addressLine1"
value={addressLine1}
onChange={handleChange}
placeholder='Address Link 1' className='p-2 w-full border-2 rounded-md' required />

<textarea 
id="addressLine2"
name="addressLine2"
value={addressLine2}
onChange={handleChange}
placeholder='Address Link 2' className='p-2 w-full border-2 rounded-md' required/>
</div>

<div className='flex justify-between gap-4 my-2'>
<input type="text" 
id="landmark"
name="landmark"
value={landmark}
onChange={handleChange}
placeholder='Landmark' className='p-2 w-full border-2 rounded-md' required/>

<input type="text" 
id="city"
name="city"
value={city}
onChange={handleChange}
placeholder='City ' className='p-2 w-full border-2 rounded-md' required/>
<input type="number"
id="pincode"
name="pincode"
value={pincode}
onChange={handleChange}
placeholder='Pincode ' className='p-2 w-full border-2 rounded-md' required min="1000" max="999999"/>
</div>

<div className="mb-4">
<label className="block text-gray-700 text-sm  mb-2" htmlFor="profilePicture">
Student's Profile Picture (Optional)
</label>
<input
type="file"
id="profilePicture"
name="profilePicture"
onChange={handleChange}
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
/>
</div>

<button type="submit" className='border text-white bg-[#F33823] rounded-md my-4 w-1/3 p-2'>Update Student</button>
</form>
</div>
</dialog>
{/** student edit or update modal end */}

{/** student details modal start */}
<dialog id="details" className="modal">
<div className="modal-box bg-white ">
<button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#0c01a1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton('details')}>✕</button>
<h2 className="text-2xl font-bold mb-4 text-center">Student Deatails</h2>
        <div className='px-6 py-2 text-start'>
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Middle Name:</strong> {middleName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Class:</strong> {studentClass}</p>
            <p><strong>Division:</strong> {division}</p>
            <p><strong>Roll Number:</strong> {rollNumber}</p>
            <p><strong>Address Line 1:</strong> {addressLine1}</p>
            <p><strong>Address Line 2:</strong> {addressLine2}</p>
            <p><strong>Landmark:</strong> {landmark}</p>
            <p><strong>City:</strong> {city}</p>
            <p><strong>Pincode:</strong> {pincode}</p>
        </div>    
</div>
</dialog>
{/** student details modal end */}

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