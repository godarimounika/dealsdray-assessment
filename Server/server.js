const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require('cors');
const LoginModel = require("./Modal/LoginModel");
// const route = require("./Router/userRouter");
const userRouter = require("./Router/userRouter");
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const employeeRouter = require('./Router/EmployeeRouter');
// const employeeRouter = require("./Router/EmployeeRouter")



mongoose.connect("mongodb+srv://Mounika:Mounika@cluster1.80jappe.mongodb.net/dealydays-assessment").then(()=>{
    console.log("connected to database")
}).catch(()=>{
    console.log("db connection failed")
})
app.use(bodyParser.json());

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3001' }));
app.use("/api", userRouter);
app.use("/api", employeeRouter);


// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });
// Routes
app.use('/api/employee', upload.single('file'), employeeRouter);
const port = 3000
app.listen(port,()=>{
    console.log(`server is listing on port ${port }`)
}) 