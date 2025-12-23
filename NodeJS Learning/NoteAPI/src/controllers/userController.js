const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const { request } = require('express');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const signup = async (req, res) => {
    //existing User Check
    // Hashed Password
    // User Creation
    // Token Generate
    const { username, email, password } = req.body;
    try {
        //existing User Check
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });

        }
        // Hashed Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // User Creation
        const result = await userModel.create({
            email: email,
            password: hashedPassword,
            username: username
        });
        // Token Generate
        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
        res.status(201).json({ user: result, token: token });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went Wrong" });
    }
}

const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        //existing User Check
        const existingUser = await userModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(400).json({ message: "User Not Found" });
        }

        //match password
        const matchPass = await bcrypt.compare(password, existingUser.password);

        if (!matchPass) {
            return res.status(400).json({ message: "invalid credential" });
        }
        // generate the token
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
        res.status(201).json({ user: existingUser, token: token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went Wrong" });
    }
}

module.exports = { signup, signin };