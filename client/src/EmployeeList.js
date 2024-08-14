// // import React from 'react'
// // import "./EmployeeList.css"
// // function EmployeeList() {
// //   return (


// // <div className='employee-list'>
// // <header>
// //   <div className='logo'>LOGO</div>
// //   <nav className='nav-items'>
// //     <a href='#home'>Home</a>
// //     <a href='#employyeelist'>Employee List</a>
// //     <a href='#Nme'>Name</a>
// //     <a href='#logout'>Log Out</a>
// //   </nav>
// //   <aside className='aside- navbar'>
// //     <h1>Employee List</h1>

// //   </aside>
// //   </header>
// //   <main>
// //     <div className='grid-container'>
// //      <div className='count'><p>Total Count:4</p></div>
// //      <div className='create-employee'><button className='employee-btn'>create employee</button></div>
// //      <div className='search'><h3>Search</h3></div>
// //      <div className='input'><input  className='input-search' placeholder='Enter Search Keywo' type='text' /></div>
// //      <div className='uniqueid'>UniqueId</div>
// //      <div>Image</div>
// //      <div>Name</div>
// //      <div>Email</div>
// //      <div>Mobile No</div>
// //      <div>Designation</div>
// //      <div>Gender</div>
// //      <div>course</div>
// //      <div>Create Date</div>
// //      <div>Action</div>
 
// //     </div>
  
// //       <div className='grid-container data'>
// //     {/* Row 1 */}
// //     <div>1</div>
// //     <div className="image"><img src="path_to_image.jpg" alt="Employee" /></div>
// //     <div>Manish</div>
// //     <div>manish@cstech.in</div>
// //     <div>9540100333</div>
// //     <div>Sales</div>
// //     <div>Male</div>
// //     <div>BCA</div>
// //     <div>12-Feb-21</div>
// //     <div>
// //       <input type='button' value="Edit" /> - 
// //       <input type='button' value="Delete" />
// //     </div>

// //     {/* Row 2 */}
// //     <div>2</div>
// //     <div className="image"><img src="path_to_image.jpg" alt="Employee" /></div>
// //     <div>Sara</div>
// //     <div>sara@cstech.in</div>
// //     <div>9856741234</div>
// //     <div>Marketing</div>
// //     <div>Female</div>
// //     <div>MBA</div>
// //     <div>15-Mar-21</div>
// //     <div>
// //       <input type='button' value="Edit" /> - 
// //       <input type='button' value="Delete" />
// //     </div>
// //     </div>
// //   </main>
// //   </div>
// // )
// // }

// // export default EmployeeList
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './EmployeeList.css';
// // import React, { useState, useEffect } from 'react';
// // function EmployeeList() {
// //   const [employees, setEmployees] = useState([]);



// //   const fetchEmployees = async () => {
// //     try {
// //       const response = await fetch('http://localhost:3000/api/employee');
// //       const data = await response.json();
// //       setEmployees(data);
// //     } catch (error) {
// //       console.error('Error fetching employees:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchEmployees();
// //   }, []);
// //   return (
// //     <div className='employee-list'>
// //       <header>
// //         <div className='logo'>LOGO</div>
// //         <nav className='nav-items'>
// //           <a href='#home'>Home</a>
// //           <a href='#employeeList'>Employee List</a>
// //           <a href='#name'>Name</a>
// //           <a href='#logout'>Log Out</a>
// //         </nav>
// //       </header>
// //       <main>
// //         <div className='grid-container'>
// //           <div className='count'><p>Total Count: 4</p></div>
// //           <div className='create-employee'>
// //             <Link to='/CreateEmployee'>
// //               <button className='employee-btn'>Create Employee</button>
// //             </Link>
// //           </div>
// //           <div className='search'><h3>Search</h3></div>
// //           <div className='input'>
// //             <input className='input-search' placeholder='Enter Search Keyword' type='text' />
// //           </div>
// //           <div className='uniqueid'>UniqueId</div>
// //           <div>Image</div>
// //           <div>Name</div>
// //           <div>Email</div>
// //           <div>Mobile No</div>
// //           <div>Designation</div>
// //           <div>Gender</div>
// //           <div>Course</div>
// //           <div>Create Date</div>
// //           <div>Action</div>
// //         </div>

// //         <div className='grid-container data'>
// //           {/* Row 1 */}
// //           <div>1</div>
// //           <div className="image"><img src="path_to_image.jpg" alt="Employee" /></div>
// //           <div>Manish</div>
// //           <div>manish@cstech.in</div>
// //           <div>9540100333</div>
// //           <div>Sales</div>
// //           <div>Male</div>
// //           <div>BCA</div>
// //           <div>12-Feb-21</div>
// //           <div>
// //             <input type='button' value="Edit" /> - 
// //             <input type='button' value="Delete" />
// //           </div>

// //           {/* Row 2 */}
// //           <div>2</div>
// //           <div className="image"><img src="path_to_image.jpg" alt="Employee" /></div>
// //           <div>Sara</div>
// //           <div>sara@cstech.in</div>
// //           <div>9856741234</div>
// //           <div>Marketing</div>
// //           <div>Female</div>
// //           <div>MBA</div>
// //           <div>15-Mar-21</div>
// //           <div>
// //             <input type='button' value="Edit" /> - 
// //             <input type='button' value="Delete" />
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './EmployeeList.css';

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);
//   const [searchKeyword, setSearchKeyword] = useState('');

//   const fetchEmployees = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/api/employee');
//       const data = await response.json();
//       setEmployees(data);
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchKeyword(e.target.value);
//   };

//   const filteredEmployees = employees.filter(employee =>
//     employee.name.toLowerCase().includes(searchKeyword.toLowerCase())
//   );
//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'short', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <div className='employee-list'>
//       <header>
//         <div className='logo'>LOGO</div>
//         <nav className='nav-items'>
//           <a href='#home'>Home</a>
//           <a href='#employeeList'>Employee List</a>
//           <a href='#name'>Name</a>
//           <a href='#logout'>Log Out</a>
//         </nav>
//       </header>
//       <main>
//         <div className='grid-container'>
//           <div className='count'>
//             <p>Total Count: {employees.length}</p>
//           </div>
//           <div className='create-employee'>
//             <Link to='/CreateEmployee'>
//               <button className='employee-btn'>Create Employee</button>
//             </Link>
//           </div>
//           <div className='search'>
//             <h3>Search</h3>
//           </div>
//           <div className='input'>
//             <input
//               className='input-search'
//               placeholder='Enter Search Keyword'
//               type='text'
//               value={searchKeyword}
//               onChange={handleSearchChange}
//             />
//           </div>
//           <div className='uniqueid'>UniqueId</div>
//           <div>Image</div>
//           <div>Name</div>
//           <div>Email</div>
//           <div>Mobile No</div>
//           <div>Designation</div>
//           <div>Gender</div>
//           <div>Course</div>
//           <div>Create Date</div>
//           <div>Action</div>
//         </div>

//         <div className='grid-container data'>
//           {filteredEmployees.map((employee) => (
//             <React.Fragment key={employee._id}>
//               <div>{employee._id}</div>
//               <div className="image">
//                 <img src={`http://localhost:3000/uploads/${employee.file}`} alt="Employee" />
//               </div>
//               <div>{employee.name}</div>
//               <div>{employee.email}</div>
//               <div>{employee.mobile}</div>
//               <div>{employee.designation}</div>
//               <div>{employee.gender}</div>
//               <div>{employee.courses.join(', ')}</div>
//            <div>{formatDate(employee.createDate)}</div>
//               <div>
//                 <button onClick={() => handleEdit(employee._id)}>Edit</button> - 
//                 <button onClick={() => handleDelete(employee._id)}>Delete</button>
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// const handleEdit = (id) => {
//   // Implement edit functionality or navigation
//   console.log('Edit employee with ID:', id);
// };

// const handleDelete = (id) => {
//   // Implement delete functionality
//   console.log('Delete employee with ID:', id);
// };

// // export default EmployeeList;

// // components/EmployeeList.js
// // import React, { useState, useEffect } from 'react';

// // function EmployeeList() {
// //   const [employees, setEmployees] = useState([]);

// //   const fetchEmployees = async () => {
// //     try {
// //       const response = await fetch('http://localhost:3000/api/employee');
// //       const data = await response.json();
// //       setEmployees(data);
// //     } catch (error) {
// //       console.error('Error fetching employees:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchEmployees();
// //   }, []);

// //   return (
// //     <div className="employee-list">
// //       <h1>Employee List</h1>
// //       <ul>
// //         {employees.map(employee => (
// //           <li key={employee._id}>
// //             <h2>{employee.name}</h2>
// //             <p>Email: {employee.email}</p>
// //             <p>Mobile: {employee.mobile}</p>
// //             <p>Designation: {employee.designation}</p>
// //             <p>Gender: {employee.gender}</p>
// //             <p>Courses: {employee.courses.join(', ')}</p>
// //             <img src={`http://localhost:3000/uploads/${employee.file}`} alt={employee.name} />
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// export default EmployeeList;


// // export default EmployeeList;
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './EmployeeList.css';

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const fetchEmployees = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/api/employee');
//       const data = await response.json();
//       setEmployees(data);
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`http://localhost:3000/api/employee/${id}`, {
//         method: 'DELETE',
//       });
//       // Refresh the list after deletion
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   const filteredEmployees = employees.filter(employee => {
//     const searchLower = searchQuery.toLowerCase();
//     return (
//       employee.name.toLowerCase().includes(searchLower) ||
//       employee.email.toLowerCase().includes(searchLower) ||
//       employee.mobile.includes(searchLower) ||
//       employee.designation.toLowerCase().includes(searchLower)
//     );
//   });

//   return (
//     <div className='employee-list'>
//       <header>
//         <div className='logo'>LOGO</div>
//         <nav className='nav-items'>
//           <a href='#home'>Home</a>
//           <a href='#employeeList'>Employee List</a>
//           <a href='#name'>Name</a>
//           <a href='#logout'>Log Out</a>
//         </nav>
//         <aside className='aside-navbar'>
//           <h1>Employee List</h1>
//         </aside>
//       </header>
//       <main>
//         <div className='grid-container'>
//           <div className='count'><p>Total Count: {filteredEmployees.length}</p></div>
//           <div className='create-employee'>
//             <Link to='/CreateEmployee'>
//               <button className='employee-btn'>Create Employee</button>
//             </Link>
//           </div>
//           <div className='search'><h3>Search</h3></div>
//           <div className='input'>
//             <input
//               className='input-search'
//               placeholder='Enter Search Keyword'
//               type='text'
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//           <div className='uniqueid'>UniqueId</div>
//           <div>Image</div>
//           <div>Name</div>
//           <div>Email</div>
//           <div>Mobile No</div>
//           <div>Designation</div>
//           <div>Gender</div>
//           <div>Course</div>
//           <div>Create Date</div>
//           <div>Action</div>
//         </div>

//         <div className='grid-container data'>
//           {filteredEmployees.map(employee => (
//             <React.Fragment key={employee._id}>
//               <div>{employee._id}</div>
//               <div className="image"><img src={`http://localhost:3000/uploads/${employee.file}`} alt={employee.name} /></div>
//               <div>{employee.name}</div>
//               <div>{employee.email}</div>
//               <div>{employee.mobile}</div>
//               <div>{employee.designation}</div>
//               <div>{employee.gender}</div>
//               <div>{employee.courses.join(', ')}</div>
//               <div>{new Date(employee.createDate).toLocaleDateString()}</div>
//               <div>
//                 <button onClick={() => navigate(`/EmployeeEdit/${employee._id}`)}>Edit</button>
//                 <button onClick={() => handleDelete(employee._id)}>Delete</button>
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default EmployeeList;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EmployeeList.css';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/employee');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/employee/${id}`, {
        method: 'DELETE',
      });
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/Employeeedit/${id}`);
  };

  return (
    <div className='employee-list'>
      <header>
        <div className='logo'>LOGO</div>
        <nav className='nav-items'>
          <a href='#home'>Home</a>
          <a href='#employeeList'>Employee List</a>
          <a href='#name'>Name</a>
          <a href='#logout'>Log Out</a>
        </nav>
        <aside className='aside-navbar'>
          <h1>Employee List</h1>
        </aside>
      </header>
      <main>
        <div className='grid-container'>
          <div className='count'><p>Total Count: {employees.length}</p></div>
          <div className='create-employee'>
            <Link to='/CreateEmployee'>
              <button className='employee-btn'>Create Employee</button>
            </Link>
          </div>
          <div className='search'><h3>Search</h3></div>
          <div className='input'>
            <input className='input-search' placeholder='Enter Search Keyword' type='text' />
          </div>
          <div className='uniqueid'>UniqueId</div>
          <div>Image</div>
          <div>Name</div>
          <div>Email</div>
          <div>Mobile No</div>
          <div>Designation</div>
          <div>Gender</div>
          <div>Course</div>
          <div>Create Date</div>
          <div>Action</div>
        </div>

        <div className='grid-container data'>
          {employees.map(employee => (
            <React.Fragment key={employee._id}>
              <div>{employee._id}</div>
              <div className="image">  <img src={`http://localhost:3000/uploads/${employee.file}`} alt={employee.name} /></div>
              <div>{employee.name}</div>
              <div>{employee.email}</div>
              <div>{employee.mobile}</div>
              <div>{employee.designation}</div>
              <div>{employee.gender}</div>
              <div>{employee.courses.join(', ')}</div>
              <div>{new Date(employee.createDate).toLocaleDateString()}</div>
              <div>
                <button onClick={() => handleEdit(employee._id)}>Edit</button>
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}

export default EmployeeList;
