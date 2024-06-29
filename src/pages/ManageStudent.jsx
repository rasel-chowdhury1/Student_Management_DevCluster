import React from 'react';
import StudentTable from '../component/StudentTable';
import UserEmail from '../component/UserEmail';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setClassFilter, setDivisionFilter, setCurrentPage, deleteStudent } from '../redux/features/students/studentSlice';

const ManageStudent = () => {
    
    const dispatch = useDispatch();
    const { students, searchTerm, classFilter, divisionFilter, currentPage, studentsPerPage } = useSelector((state) => state.students);


   console.log({students})
  
    const filteredStudents = students.filter(student => {
      const matchesSearch = (
        student?.firstName?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        student?.lastName?.toLowerCase().includes(searchTerm?.toLowerCase())
      );
      const matchesClass = (classFilter === 'All' || student?.class.toString() === classFilter);
      const matchesDivision = (divisionFilter === 'All' || student?.division === divisionFilter);
  
      return matchesSearch && matchesClass && matchesDivision;
    });

    console.log({filteredStudents})

    const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const paginatedStudents = filteredStudents.slice(startIndex, startIndex + studentsPerPage);

  
    const handleSearch = (e) => {
      dispatch(setSearchTerm(e.target.value));
    };
  
    const handleClassFilter = (e) => {
      dispatch(setClassFilter(e.target.value));
    };
  
    const handleDivisionFilter = (e) => {
      console.log("Divistion button clicked -> ", e.target.value)
      dispatch(setDivisionFilter(e.target.value));
    };
  
    const handleDelete = (id) => {
      dispatch(deleteStudent(id));
    };
  
    const handlePrint = () => {
      window.print();
    };

    const handlePageChange = (page) => {
      dispatch(setCurrentPage(page));
    };

    return (
        <div className='w-4/5'>
            <div className='mx-8'>
                <UserEmail/>

                <div className='flex justify-evenly items-center my-4'>
                    <h2 className='font-semibold'>Manage Students</h2>
                    <input value={searchTerm}
                      onChange={handleSearch} type="search" name="search" id="" placeholder='search'  className=' py-[11px]  px-[14px] rounded-md bg-[#F8F9FB]'/>
                    <select
                      value={classFilter}
                      onChange={handleClassFilter}
                      className="border border-gray-300 rounded-md px-3 py-2 mr-4"
        >
          <option value="All">All Classes</option>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map( cls => (
            <option key={cls} value={cls}>Class {cls}</option>
          ))}
        </select>
        <select
          value={divisionFilter}
          onChange={handleDivisionFilter}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="All">All Divisions</option>
          {['A', 'B', 'C', 'D', 'E'].map(division => (
            <option key={division} value={division}>Division {division}</option>
          ))}
        </select>
                    <div><button onClick={handlePrint} className=' py-[11px]  px-[14px] rounded-md bg-[#F8F9FB]'>Print</button></div>
                    <div> 25 June 2024 16:20</div>
                </div>
            </div>

            <div className='mx-2'>
                <StudentTable studentData={students}/>
            </div>

            <div className="flex justify-evenly my-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              >
                Previous
              </button>
              <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </div>

        </div>
    );
};

export default ManageStudent;