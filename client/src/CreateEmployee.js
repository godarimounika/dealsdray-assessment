
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './createEmployee.css';

function CreateEmployee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [courses, setCourses] = useState([]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setCourses(prevCourses =>
      prevCourses.includes(value)
        ? prevCourses.filter(course => course !== value)
        : [...prevCourses, value]
    );
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('designation', designation);
    formData.append('gender', gender);
    formData.append('courses', JSON.stringify(courses));
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await fetch('http://localhost:3000/api/employee', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Server error: ${errorData.error}`);
      }

      navigate('/EmployeeList'); // Redirect after successful creation
    } catch (error) {
      console.error('Error creating employee:', error);
      setError(`Failed to create employee. ${error.message}`);
    }
  };

  return (
    <div className='create-employee'>
      <header>
        <div className='logo'>LOGO</div>
        <nav className='nav-items'>
          <a href='#home'>Home</a>
          <a href='#employeeList'>Employee List</a>
          <a href='#name'>Name</a>
          <a href='#logout'>Log Out</a>
        </nav>
        <aside className='aside-navbar'>
          <h1>Create Employee</h1>
        </aside>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              className='input1'
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='mobile'>Mobile No:</label>
            <input
              id='mobile'
              className='input1'
              type='text'
              name='mobile'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='designation'>Designation:</label>
            <select
              id='designation'
              className='input1'
              name='designation'
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            >
              <option value=''>Select Designation</option>
              <option value='hr'>HR</option>
              <option value='manager'>Manager</option>
              <option value='sales'>Sales</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Gender:</label>
            <input
              type='radio'
              name='gender'
              value='m'
              checked={gender === 'm'}
              onChange={(e) => setGender(e.target.value)}
            /> M
            <input
              type='radio'
              name='gender'
              value='f'
              checked={gender === 'f'}
              onChange={(e) => setGender(e.target.value)}
            /> F
          </div>
          <div className='form-group'>
            <label>Courses:</label>
            <div className='course-option'>
              <input
                type='checkbox'
                name='courses'
                value='MCA'
                checked={courses.includes('MCA')}
                onChange={handleCheckboxChange}
              /> MCA
            </div>
            <div className='course-option'>
              <input
                type='checkbox'
                name='courses'
                value='BCA'
                checked={courses.includes('BCA')}
                onChange={handleCheckboxChange}
              /> BCA
            </div>
            <div className='course-option'>
              <input
                type='checkbox'
                name='courses'
                value='BSC'
                checked={courses.includes('BSC')}
                onChange={handleCheckboxChange}
              /> BSC
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='file'>Img Upload:</label>
            <input
              id='file'
              type='file'
              onChange={handleFileChange}
              required
            />
          </div>
          {error && <div className='error'>{error}</div>}
          <div>
            <button className='submit-button' type='submit'>Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default CreateEmployee;
