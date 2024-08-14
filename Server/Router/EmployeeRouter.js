
const express = require('express');
const multer = require('multer');
const router = express.Router();
const { addEmployee, getAllEmployees, updateEmployee, deleteEmployee, getEmployeeById } = require('../Controllers/EmployeeController');

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

// Create employee
router.post('/employee', upload.single('file'), addEmployee);

// Get all employees
router.get('/employee', getAllEmployees);

// Get employee by ID
router.get('/employee/:id', getEmployeeById);

// Update employee by ID
router.put('/employee/:id', upload.single('file'), updateEmployee);

// Delete employee by ID
router.delete('/employee/:id', deleteEmployee);

module.exports = router;
