// // import React from 'react'
// // import "./Login.css"

// // function Login() {
  
// //   return (

    
// //     <div className='Login-wrapper'>
// //   <h1>Login Page</h1>
// //             <form className="login-form">
// //                 <label  id="username">USERNAME  <input for="username" placeholder='USERNAME'/></label>
// //                 <label id="password">PASSWORD    <input for="password" placeholder='PASSWORD'/></label>
// //                 <input  className='btn' type='button' value="Login"/>

// //             </form>

        


// //     </div>
// //   )
// // }

// // export default Login

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import "./Login.css";

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Hook for navigation

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/api/login', {
//         s_userName: username,
//         s_password: password
//       });
//       alert(response.data.message);
//       navigate('/Dashboard'); // Redirect to Dashboard on successful login
//     } catch (error) {
//       alert(error.response?.data?.Error || 'An error occurred');
//     }
//   };

//   return (
//     <div className='Login-wrapper'>
//       <h1>Login Page</h1>
//       <form className="login-form" onSubmit={handleLogin}>
//         <label htmlFor="username">USERNAME
//           <input
//             id="username"
//             type="text"
//             placeholder='USERNAME'
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label htmlFor="password">PASSWORD
//           <input
//             id="password"
//             type="password"
//             placeholder='PASSWORD'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <input className='btn' type='submit' value="Login" />
//       </form>
//       <div className="links">
//         <Link to="/register">Don't have an account? Register here</Link>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css"; // Use the same CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        s_userName: username,
        s_password: password
      });
      // Store username in localStorage
      localStorage.setItem('username', username);
      alert(response.data.message);
      navigate('/Dashboard'); // Redirect to Dashboard on successful login
    } catch (error) {
      alert(error.response?.data?.Error || 'An error occurred');
    }
  };

  return (
    <div className='Login-wrapper'>
      <h1>Login Page</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">USERNAME
          <input
            id="username"
            type="text"
            placeholder='USERNAME'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">PASSWORD
          <input
            id="password"
            type="password"
            placeholder='PASSWORD'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input className='btn' type='submit' value="Login" />
        <div className="links">
          <Link to="/register">Don't have an account? Register here</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
