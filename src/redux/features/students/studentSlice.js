import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   students: [
//     {
//       id: 1,
//       firstName: "John",
//       middleName: "M.",
//       lastName: "Doe",
//       class: "5",
//       division: "A",
//       rollNumber: "12",
//       addressLine1: "123 Main St",
//       addressLine2: "",
//       landmark: "Near Park",
//       city: "New York",
//       pincode: "10001",
//       profilePicture: null
//     },
//     {
//       id: 2,
//       firstName: "Jane",
//       middleName: "A.",
//       lastName: "Smith",
//       class: "6",
//       division: "B",
//       rollNumber: "23",
//       addressLine1: "456 Oak St",
//       addressLine2: "",
//       landmark: "Near Mall",
//       city: "Los Angeles",
//       pincode: "90001",
//       profilePicture: null
//     },
//     {
//       id: 3,
//       firstName: "Michael",
//       middleName: "B.",
//       lastName: "Johnson",
//       class: "8",
//       division: "C",
//       rollNumber: "34",
//       addressLine1: "789 Pine St",
//       addressLine2: "",
//       landmark: "Near School",
//       city: "Chicago",
//       pincode: "60601",
//       profilePicture: null
//     },
//     {
//       id: 4,
//       firstName: "Emily",
//       middleName: "C.",
//       lastName: "Williams",
//       class: "3",
//       division: "D",
//       rollNumber: "45",
//       addressLine1: "321 Maple St",
//       addressLine2: "",
//       landmark: "Near Library",
//       city: "Houston",
//       pincode: "77001",
//       profilePicture: null
//     },
//     {
//       id: 5,
//       firstName: "Daniel",
//       middleName: "D.",
//       lastName: "Brown",
//       class: "4",
//       division: "E",
//       rollNumber: "56",
//       addressLine1: "654 Cedar St",
//       addressLine2: "",
//       landmark: "Near Hospital",
//       city: "Phoenix",
//       pincode: "85001",
//       profilePicture: null
//     },
//     {
//       id: 6,
//       firstName: "Sophia",
//       middleName: "E.",
//       lastName: "Jones",
//       class: "7",
//       division: "A",
//       rollNumber: "67",
//       addressLine1: "987 Birch St",
//       addressLine2: "",
//       landmark: "Near Market",
//       city: "Philadelphia",
//       pincode: "19101",
//       profilePicture: null
//     },
//     {
//       id: 7,
//       firstName: "Matthew",
//       middleName: "F.",
//       lastName: "Garcia",
//       class: "9",
//       division: "B",
//       rollNumber: "78",
//       addressLine1: "123 Elm St",
//       addressLine2: "",
//       landmark: "Near Park",
//       city: "San Antonio",
//       pincode: "78201",
//       profilePicture: null
//     },
//     {
//       id: 8,
//       firstName: "Olivia",
//       middleName: "G.",
//       lastName: "Martinez",
//       class: "2",
//       division: "C",
//       rollNumber: "89",
//       addressLine1: "456 Walnut St",
//       addressLine2: "",
//       landmark: "Near Stadium",
//       city: "San Diego",
//       pincode: "92101",
//       profilePicture: null
//     },
//     {
//       id: 9,
//       firstName: "James",
//       middleName: "H.",
//       lastName: "Hernandez",
//       class: "10",
//       division: "D",
//       rollNumber: "90",
//       addressLine1: "789 Spruce St",
//       addressLine2: "",
//       landmark: "Near Theater",
//       city: "Dallas",
//       pincode: "75201",
//       profilePicture: null
//     },
//     {
//       id: 10,
//       firstName: "Ava",
//       middleName: "I.",
//       lastName: "Lopez",
//       class: "1",
//       division: "E",
//       rollNumber: "11",
//       addressLine1: "321 Fir St",
//       addressLine2: "",
//       landmark: "Near Museum",
//       city: "San Jose",
//       pincode: "95101",
//       profilePicture: null
//     },
//     {
//       id: 11,
//       firstName: "Benjamin",
//       middleName: "J.",
//       lastName: "Gonzalez",
//       class: "11",
//       division: "A",
//       rollNumber: "22",
//       addressLine1: "654 Redwood St",
//       addressLine2: "",
//       landmark: "Near School",
//       city: "Austin",
//       pincode: "73301",
//       profilePicture: null
//     },
//     {
//       id: 12,
//       firstName: "Isabella",
//       middleName: "K.",
//       lastName: "Wilson",
//       class: "12",
//       division: "B",
//       rollNumber: "33",
//       addressLine1: "987 Cypress St",
//       addressLine2: "",
//       landmark: "Near Park",
//       city: "Jacksonville",
//       pincode: "32099",
//       profilePicture: null
//     },
//     {
//       id: 13,
//       firstName: "Lucas",
//       middleName: "L.",
//       lastName: "Anderson",
//       class: "6",
//       division: "C",
//       rollNumber: "44",
//       addressLine1: "123 Magnolia St",
//       addressLine2: "",
//       landmark: "Near Mall",
//       city: "Fort Worth",
//       pincode: "76101",
//       profilePicture: null
//     },
//     {
//       id: 14,
//       firstName: "Mia",
//       middleName: "M.",
//       lastName: "Thomas",
//       class: "7",
//       division: "D",
//       rollNumber: "55",
//       addressLine1: "456 Cherry St",
//       addressLine2: "",
//       landmark: "Near Library",
//       city: "Columbus",
//       pincode: "43004",
//       profilePicture: null
//     },
//     {
//       id: 15,
//       firstName: "Alexander",
//       middleName: "N.",
//       lastName: "Lee",
//       class: "8",
//       division: "E",
//       rollNumber: "66",
//       addressLine1: "789 Chestnut St",
//       addressLine2: "",
//       landmark: "Near Hospital",
//       city: "Charlotte",
//       pincode: "28201",
//       profilePicture: null
//     }
//   ]
//   ,
//   searchTerm: '',
//   classFilter: 'All',
//   divisionFilter: 'All',
//   currentPage: 1,
//   studentsPerPage: 10,
// };

const initialState = {
    students: [],
    searchTerm: '',
    classFilter: 'All',
    divisionFilter: 'All',
    currentPage: 1,
  studentsPerPage: 5,
}
const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(student => student.rollNumber + student.studentClass === action.payload.rollNumber + student.studentClass);
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(student => student.rollNumber + student.studentClass !== action.payload);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setClassFilter: (state, action) => {
      state.classFilter = action.payload;
    },
    setDivisionFilter: (state, action) => {
      state.divisionFilter = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  addStudent,
  updateStudent,
  deleteStudent,
  setSearchTerm,
  setClassFilter,
  setDivisionFilter,
  setCurrentPage,
} = studentSlice.actions;

export default studentSlice.reducer;