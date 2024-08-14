// // import React,{useState,useEffect} from 'react'
// // import "./Login.css"; 
// // import axios from "axios"

// // function Register() {
// //     const [username, setUsername] = useState('');
// //     const [password, setPassword] = useState('');
  
// //     const handleRegister = async () => {
// //       try {
// //         const response = await axios.post('http://localhost:3000/api/register', {
// //           s_userName: username,
// //           s_password: password
// //         });
// //         alert(response.data.message);
// //       } catch (error) {
// //         alert(error.response?.data?.Error || 'An error occurred');
// //       }
// //     };
  
// //     return (
// //       <div className='Login-wrapper'>
// //         <h1>Register Page</h1>
// //         <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
// //           <label htmlFor="username">USERNAME
// //             <input
// //               id="username"
// //               type="text"
// //               placeholder='USERNAME'
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //             />
// //           </label>
// //           <label htmlFor="password">PASSWORD
// //             <input
// //               id="password"
// //               type="password"
// //               placeholder='PASSWORD'
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //           </label>
// //           <input className='btn' type='submit' value="Register"/>
// //         </form>
// //       </div>
// //     );
// // }

// // export default Register
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate ,Link } from 'react-router-dom';
// import "./Login.css"; // Use the same CSS file

// function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Hook for navigation

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/api/register', {
//         s_userName: username,
//         s_password: password
//       });
//       alert(response.data.message);
//       navigate('/Dashboard'); // Redirect to Dashboard on successful registration
//     } catch (error) {
//         console.log(error.response)
//       alert(error.response?.data?.Error || 'An error occurred');
//     }
//   };

//   return (
//     <div className='Login-wrapper'>
//       <h1>Register Page</h1>
//       <form className="login-form" onSubmit={handleRegister}>
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
//         <input className='btn' type='submit' value="Register" />
//       </form>
//       <div className="links">
//         <Link to="/">Already have an account? Login here</Link>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css"; // Use the same CSS file

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/register', {
        s_userName: username,
        s_password: password
      });
      // Store username in localStorage
      localStorage.setItem('username', username);
      alert(response.data.message);
      navigate('/Dashboard'); // Redirect to Dashboard on successful registration
    } catch (error) {
      alert(error.response?.data?.Error || 'An error occurred');
    }
  };

  return (
    <div className='Login-wrapper'>
      <h1>Register Page</h1>
      <form className="login-form" onSubmit={handleRegister}>
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
        <input className='btn' type='submit' value="Register" />
        <div className="links">
          <Link to="/">Already have an account? Login here</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
