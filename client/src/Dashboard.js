// import React from 'react'
// import "./Dashboard.css"
// function Dashboard() {
//   return (
//     <div className='dashboard-Conatiner'>
//       <header className='header'>
// <div className='logo'>LOGO</div>
// <nav className='nav-items'>
// <a href='#'>Home</a>
// <a href='#'>Employee List</a>
// <a href='#'>Name</a>
// <a href='#'>Log Out</a>


//   </nav>
//       </header>
//  <aside className='aside-navbar'>
//    <h1>Dashboard</h1>
//  </aside>
// <main className='main-container'>
//    <h2> welcome admin pannel</h2>
// </main>
//     </div>
//   )
// }

// export default Dashboard

import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom';

function Dashboard() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    // Clear localStorage and redirect to login page
    localStorage.removeItem('username');
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <div className='dashboard-Conatiner'>
      <header className='header'>
        <div className='logo'>LOGO</div>
        <nav className='nav-items'>
        <Link to='/'>Home</Link>
        <Link to='/EmployeeList'>Employee List</Link>
          <a href='#'>{username}</a> {/* Display username */}
          <a href='#' onClick={handleLogout}>Log Out</a>
        </nav>
      </header>
      <aside className='aside-navbar'>
        <h1>Dashboard</h1>
      </aside>
      <main className='main-container'>
        <h2>Welcome to the admin panel, {username}</h2>
      </main>
    </div>
  );
}

export default Dashboard;
