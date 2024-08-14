// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './Employeedit.css';

// function EmployeeEdit() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [employee, setEmployee] = useState(null);

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/employee/${id}`);
//         const data = await response.json();
//         setEmployee(data);
//       } catch (error) {
//         console.error('Error fetching employee:', error);
//       }
//     };

//     fetchEmployee();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setEmployee((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox'
//         ? prev[name].includes(value)
//           ? prev[name].filter((item) => item !== value)
//           : [...prev[name], value]
//         : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', employee.name);
//     formData.append('email', employee.email);
//     formData.append('mobile', employee.mobile);
//     formData.append('designation', employee.designation);
//     formData.append('gender', employee.gender);
//     formData.append('courses', JSON.stringify(employee.courses));

//     const fileInput = document.getElementById('file');
//     if (fileInput.files.length > 0) {
//       formData.append('file', fileInput.files[0]);
//     }

//     try {
//       await fetch(`http://localhost:3000/api/employee/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });
//       navigate('/EmployeeList', { state: { updated: true } });
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   if (!employee) return <div>Loading...</div>;

//   return (
//     <div className='employee-edit'>
//       <header>
//         <div className='logo'>LOGO</div>
//         <nav className='nav-items'>
//           <a href='#home'>Home</a>
//           <a href='#employeeList'>Employee List</a>
//           <a href='#name'>Name</a>
//           <a href='#logout'>Log Out</a>
//         </nav>
//       </header>
//       <main className='form-content'>
//         <form className='form-wrapper' onSubmit={handleSubmit}>
//           <div className='form-group'>
//             <label htmlFor='name'>Name:</label>
//             <input
//               id='name'
//               className='input1'
//               type='text'
//               name='name'
//               value={employee.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='email'>Email:</label>
//             <input
//               id='email'
//               className='input1'
//               type='email'
//               name='email'
//               value={employee.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='mobile'>Mobile No:</label>
//             <input
//               id='mobile'
//               className='input1'
//               type='text'
//               name='mobile'
//               value={employee.mobile}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='designation-wrap'>
//             <label htmlFor='designation'>Designation:</label>
//             <select
//               id='designation'
//               className='input1'
//               name='designation'
//               value={employee.designation}
//               onChange={handleChange}
//             >
//               <option value='hr'>HR</option>
//               <option value='manager'>Manager</option>
//               <option value='sales'>Sales</option>
//             </select>
//           </div>
//           <div className='gender-group'>
//             <label>Gender:</label>
//             <input
//               type='radio'
//               name='gender'
//               value='m'
//               checked={employee.gender === 'm'}
//               onChange={handleChange}
//             /> M
//             <input
//               type='radio'
//               name='gender'
//               value='f'
//               checked={employee.gender === 'f'}
//               onChange={handleChange}
//             /> F
//           </div>
//           <div className='courses-group'>
//             <label>Courses:</label>
//             <div className='course-option'>
//               <input
//                 type='checkbox'
//                 name='courses'
//                 value='MCA'
//                 checked={employee.courses.includes('MCA')}
//                 onChange={handleChange}
//               /> MCA
//             </div>
//             <div className='course-option'>
//               <input
//                 type='checkbox'
//                 name='courses'
//                 value='BCA'
//                 checked={employee.courses.includes('BCA')}
//                 onChange={handleChange}
//               /> BCA
//             </div>
//             <div className='course-option'>
//               <input
//                 type='checkbox'
//                 name='courses'
//                 value='BSC'
//                 checked={employee.courses.includes('BSC')}
//                 onChange={handleChange}
//               /> BSC
//             </div>
//           </div>
//           <div className='file1'>
//             <label htmlFor='file'>Img Upload:</label>
//             <input id='file' type='file' />
//           </div>
//           <div>
//             <button className='submit-button' type='submit'>Update</button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// }

// export default EmployeeEdit;
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './Employeedit.css';

// function EmployeeEdit() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [employee, setEmployee] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: 'hr',
//     gender: 'm',
//     courses: [], // Ensure courses is initialized as an empty array
//   });

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/employee/${id}`);
//         const data = await response.json();
//         setEmployee(data);
//       } catch (error) {
//         console.error('Error fetching employee:', error);
//       }
//     };

//     fetchEmployee();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setEmployee((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox'
//         ? prev[name].includes(value)
//           ? prev[name].filter((item) => item !== value)
//           : [...prev[name], value]
//         : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', employee.name);
//     formData.append('email', employee.email);
//     formData.append('mobile', employee.mobile);
//     formData.append('designation', employee.designation);
//     formData.append('gender', employee.gender);
//     formData.append('courses', JSON.stringify(employee.courses));

//     const fileInput = document.getElementById('file');
//     if (fileInput.files.length > 0) {
//       formData.append('file', fileInput.files[0]);
//     }

//     try {
//       await fetch(`http://localhost:3000/api/employee/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });
//       navigate('/EmployeeList', { state: { updated: true } });
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   if (!employee) return <div>Loading...</div>;

//   return (
//     <div className='employee-edit'>
//       <header>
//         <div className='logo'>LOGO</div>
//         <nav className='nav-items'>
//           <a href='#home'>Home</a>
//           <a href='#employeeList'>Employee List</a>
//           <a href='#name'>Name</a>
//           <a href='#logout'>Log Out</a>
//         </nav>
//       </header>
//       <main className='form-content'>
//         <form className='form-wrapper' onSubmit={handleSubmit}>
//           <div className='form-group'>
//             <label htmlFor='name'>Name:</label>
//             <input
//               id='name'
//               className='input1'
//               type='text'
//               name='name'
//               value={employee.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='email'>Email:</label>
//             <input
//               id='email'
//               className='input1'
//               type='email'
//               name='email'
//               value={employee.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='mobile'>Mobile No:</label>
//             <input
//               id='mobile'
//               className='input1'
//               type='text'
//               name='mobile'
//               value={employee.mobile}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='designation-wrap'>
//             <label htmlFor='designation'>Designation:</label>
//             <select
//               id='designation'
//               className='input1'
//               name='designation'
//               value={employee.designation}
//               onChange={handleChange}
//             >
//               <option value='hr'>HR</option>
//               <option value='manager'>Manager</option>
//               <option value='sales'>Sales</option>
//             </select>
//           </div>
//           <div className='gender-group'>
//             <label>Gender:</label>
//             <input
//               type='radio'
//               name='gender'
//               value='m'
//               checked={employee.gender === 'm'}
//               onChange={handleChange}
//             /> M
//             <input
//               type='radio'
//               name='gender'
//               value='f'
//               checked={employee.gender === 'f'}
//               onChange={handleChange}
//             /> F
//           </div>
//           <div className='courses-group'>
//             <label>Courses:</label>
//             <div className='course-option'>
//               <input
//                 type='checkbox'
//                 name='courses'
//                 value='MCA'
//                 checked={employee.courses.includes('MCA')}
//                 onChange={handleChange}
//               /> MCA
//             </div>
//             <div className='course-option'>
//               <input
//                 type='checkbox'
//                 name='courses'
//                 value='BCA'
//                 checked={employee.courses.includes('BCA')}
//                 onChange={handleChange}
//               /> BCA
//             </div>
//             <div className='course-option'>
//               <input
//                 type='checkbox'
//                 name='courses'
//                 value='BSC'
//                 checked={employee.courses.includes('BSC')}
//                 onChange={handleChange}
//               /> BSC
//             </div>
//           </div>
//           <div className='file1'>
//             <label htmlFor='file'>Img Upload:</label>
//             <input id='file' type='file' />
//           </div>
//           <div>
//             <button className='submit-button' type='submit'>Update</button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// }

// export default EmployeeEdit;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Employeedit.css';

function EmployeeEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: 'hr',
    gender: 'm',
    courses: [],
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/employee/${id}`);
        const data = await response.json();
        setEmployee(data);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: type === 'checkbox'
        ? prev[name].includes(value)
          ? prev[name].filter((item) => item !== value)
          : [...prev[name], value]
        : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('mobile', employee.mobile);
    formData.append('designation', employee.designation);
    formData.append('gender', employee.gender);
    formData.append('courses', JSON.stringify(employee.courses));

    const fileInput = document.getElementById('file');
    if (fileInput.files.length > 0) {
      formData.append('file', fileInput.files[0]);
    }

    try {
      await fetch(`http://localhost:3000/api/employee/${id}`, {
        method: 'PUT',
        body: formData,
      });
      navigate('/CreateEmployee', { state: { updated: true } });
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  if (!employee) return <div>Loading...</div>;

  return (
    <div className='employee-edit'>
      <header>
        <div className='logo'>LOGO</div>
        <nav className='nav-items'>
          <a href='#home'>Home</a>
          <a href='#employeeList'>Employee List</a>
          <a href='#name'>Name</a>
          <a href='#logout'>Log Out</a>
        </nav>
      </header>
      <main className='form-content'>
        <form className='form-wrapper' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input
              id='name'
              className='input1'
              type='text'
              name='name'
              value={employee.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              className='input1'
              type='email'
              name='email'
              value={employee.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='mobile'>Mobile No:</label>
            <input
              id='mobile'
              className='input1'
              type='text'
              name='mobile'
              value={employee.mobile}
              onChange={handleChange}
            />
          </div>
          <div className='designation-wrap'>
            <label htmlFor='designation'>Designation:</label>
            <select
              id='designation'
              className='input1'
              name='designation'
              value={employee.designation}
              onChange={handleChange}
            >
              <option value='hr'>HR</option>
              <option value='manager'>Manager</option>
              <option value='sales'>Sales</option>
            </select>
          </div>
          <div className='gender-group'>
            <label>Gender:</label>
            <input
              type='radio'
              name='gender'
              value='m'
              checked={employee.gender === 'm'}
              onChange={handleChange}
            /> M
            <input
              type='radio'
              name='gender'
              value='f'
              checked={employee.gender === 'f'}
              onChange={handleChange}
            /> F
          </div>
          <div className='courses-group'>
            <label>Courses:</label>
            <div className='course-option'>
              <input
                type='checkbox'
                name='courses'
                value='MCA'
                checked={employee.courses.includes('MCA')}
                onChange={handleChange}
              /> MCA
            </div>
            <div className='course-option'>
              <input
                type='checkbox'
                name='courses'
                value='BCA'
                checked={employee.courses.includes('BCA')}
                onChange={handleChange}
              /> BCA
            </div>
            <div className='course-option'>
              <input
                type='checkbox'
                name='courses'
                value='BSC'
                checked={employee.courses.includes('BSC')}
                onChange={handleChange}
              /> BSC
            </div>
          </div>
          <div className='file1'>
            <label htmlFor='file'>Img Upload:</label>
            <input id='file' type='file' />
          </div>
          <div>
            <button className='submit-button' type='submit'>Update</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EmployeeEdit;
