import React, { useState } from 'react';
import UserEmail from '../component/UserEmail';
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux/features/students/studentSlice';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        studentClass: '1',
        division: 'A',
        rollNumber: '',
        addressLine1: '',
        addressLine2: '',
        landmark: '',
        city: '',
        pincode: '',
        profilePicture: null,
      });
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
          ...formData,
          [name]: files ? files[0] : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log({formData});
        dispatch(addStudent(formData));
        alert("successfully added")
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      class: '',
      division: '',
      rollNumber: '',
      addressLine1: '',
      addressLine2: '',
      landmark: '',
      city: '',
      pincode: '',
      profilePicture: null,
    })
    
    navigate("/")
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
    
    return (
        <div className='w-4/5'>
            <div className='mx-8'>
                <UserEmail/>
                <div className='flex justify-between items-center my-4'>
                    <h2 className='font-semibold'>Add Student</h2>
                    <p> 25 June 2024 16:20</p>
                </div>
                <div className='w-full'>
<form onSubmit={handleSubmit} >
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
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map( cls => (
                <option key={cls} value={cls}>Class {cls}</option>
            ))}
        </select>
        <select 
        name="division" id="division"  className='p-2 w-full border-2 rounded-md' 
        value={division}
        onChange={handleChange}
        required>
            <option value="volvo">Select Division</option>
            {['A', 'B', 'C', 'D', 'E'].map(division => (
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

    <button type="submit" className='border text-white bg-[#F33823] rounded-md my-4 w-1/3 p-2'>Add Student</button>
</form>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;