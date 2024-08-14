
const EmployeeModel = require("../Modal/EmployeeModel");
const validator = require("validator");
const path = require("path");

const addEmployee = async (req, res) => {
  const { name, email, mobile, designation, gender, courses } = req.body;
  const file = req.file;

  try {
    // Validation
    if (!name || !email || !mobile || !designation || !gender || !courses || !file) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    if (!/^\d+$/.test(mobile)) {
      return res.status(400).json({ error: 'Mobile number must be numeric' });
    }
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
      return res.status(400).json({ error: 'Only JPG and PNG files are allowed' });
    }

    // Check for duplicate email
    const existingEmployee = await EmployeeModel.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    // Save file info and employee data
    const employee = new EmployeeModel({
      name,
      email,
      mobile,
      designation,
      gender,
      courses: JSON.parse(courses),
      file: file.filename
    });

    await employee.save();
    res.json({ message: 'Employee data saved successfully!' });

  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Update employee by ID
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, email, mobile, designation, gender, courses } = req.body;
  const file = req.file;

  try {
    // Validation
    if (!name || !email || !mobile || !designation || !gender || !courses) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    if (!/^\d+$/.test(mobile)) {
      return res.status(400).json({ error: 'Mobile number must be numeric' });
    }
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (file && !allowedTypes.includes(file.mimetype)) {
      return res.status(400).json({ error: 'Only JPG and PNG files are allowed' });
    }

    // Update employee data
    const updateData = {
      name,
      email,
      mobile,
      designation,
      gender,
      courses: JSON.parse(courses)
    };
    
    if (file) {
      updateData.file = file.filename;
    }

    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    
    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete employee by ID
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEmployee = await EmployeeModel.findByIdAndDelete(id);
    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting employee' });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { addEmployee, getAllEmployees, updateEmployee, deleteEmployee, getEmployeeById };
