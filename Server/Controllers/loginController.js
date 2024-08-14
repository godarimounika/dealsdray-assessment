

const bcrypt = require('bcryptjs');
const LoginModel = require('../Modal/LoginModel');

const registerUser = async (req, res) => {
    const { s_userName, s_password } = req.body;
    
    if (!s_userName || !s_password) {
        return res.status(400).send({ Error: "User and Password are required" });
    }

    try {
        const existingUser = await LoginModel.findOne({ s_userName });
        if (existingUser) {
            return res.status(400).send({ Error: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(s_password, 10);
        const user = new LoginModel({ s_userName, s_password: hashedPassword });
        await user.save();

        res.status(201).send({ message: "User registered successfully" });
    } catch (error) {
        console.error("Registration Error:", error.message || error);
        res.status(500).send({ Error: "Server error", details: error.message || "Unknown error" });
    }
};

const loginUser = async (req, res) => {
    const { s_userName, s_password } = req.body;

    if (!s_userName || !s_password) {
        return res.status(400).send({ Error: "Username and Password are required" });
    }

    try {
        const user = await LoginModel.findOne({ s_userName });
        if (!user) {
            return res.status(401).send({ Error: "Invalid login details" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(s_password, user.s_password);
        if (!isMatch) {
            return res.status(401).send({ Error: "Invalid login details" });
        }

        res.status(200).send({ message: "Login successful", username: s_userName });
    } catch (error) {
        console.error("Login Error:", error.message || error);
        res.status(500).send({ Error: "Server error", details: error.message || "Unknown error" });
    }
};

module.exports = { registerUser, loginUser };
