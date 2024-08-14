

//     // const mongoose = require("mongoose");
    
//     // const EmployeeSchema = new mongoose.Schema({
//     //     f_id: {
//     //         type: String, 
//     //         required: true 
//     //     },
//     //     f_image: {
//     //         type: String,
//     //         required: true
//     //     },
//     //     f_Name: {
//     //         type: String,
//     //         required: true
//     //     },
//     //     f_Email: {
//     //         type: String,
//     //         required: true
//     //     },
//     //     f_Mobile: {
//     //         type: String,
//     //         required: true
//     //     },
//     //     f_Designation: {
//     //         type: String,
//     //         required: true
//     //     },
//     //     f_Gender: {
//     //         type: String,
//     //         required: true
//     //     },
//     //     f_Course: {
//     //         type: String,
//     //         required: true
//     //     },
//     //     f_Createdate: {
//     //         type: String,
//     //         required: true
//     //     }
//     // });
    
//     // const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
//     // module.exports = EmployeeModel;
    

//     const mongoose = require('mongoose');

// const EmployeeSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   mobile: { type: String, required: true },
//   designation: { type: String, required: true },
//   gender: { type: String, required: true },
//   courses: { type: [String], required: true },
//   file: { type: String, required: true }
// });

// const EmployeeModel = mongoose.model('Employee', EmployeeSchema);
// module.exports = EmployeeModel;
// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  designation: { type: String, required: true },
  gender: { type: String, required: true },
  courses: [String],
  file: { type: String } ,// Store file path or URL
  createDate: { type: Date, default: Date.now }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
