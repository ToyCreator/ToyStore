const User = require('../models/userModel');
const userService = require('../services/userService');

// Get all users
const getUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

// Register user
const registerUser = async (req, res) => {
  const newUser = await userService.registerUser(req.body);
  res.status(201).json(newUser);
};

// Login user
const loginUser = async (req, res) => {
  const token = await userService.loginUser(req.body);
  res.json({ token });
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
};
