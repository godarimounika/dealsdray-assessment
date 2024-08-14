// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import CreateEmployee from './CreateEmployee';
// import Dashboard from './Dashboard';
// import EmployeeList from './EmployeeList';
// import Employeedit from './Employeedit';
// import Login from './Login';


// function App() {
//   return (
//     <div className="App">
//      <BrowserRouter>
//      <Routes>
//       <Route path='/'  element={<Login/>}/>
//       <Route path='/Dashboard'  element={<Dashboard/>}/>
//       <Route path='/EmployeeList'  element={<EmployeeList/>}/>
//       <Route path='/Employeedit'  element={<Employeedit/>}/>
//       <Route path='/CreateEmployee'  element={<CreateEmployee/>}/>
//      </Routes>
//      </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from './CreateEmployee';
import Dashboard from './Dashboard';
import EmployeeList from './EmployeeList';
import Employeedit from './Employeedit';
import Login from './Login';
import Register from './Register'; // Import Register component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} /> {/* Add route for Register */}
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/EmployeeList' element={<EmployeeList />} />
          <Route path='/Employeedit' element={<Employeedit />} />
          <Route path="/EmployeeEdit/:id" element={<Employeedit />} />
          <Route path='/CreateEmployee' element={<CreateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
