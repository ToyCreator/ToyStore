const User = require('../models/userModel');
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
// 登录用户
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. 查找用户是否存在
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: '用户不存在' });
    }

    // 2. 比对密码
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: '密码错误' });
    }

    // 3. 生成 JWT token，设置有效期为 7 天
    const token = jwt.sign(
      { id: user._id }, // payload：将用户 ID 作为 token 的载荷
      process.env.JWT_SECRET, // 使用 .env 文件中的 JWT_SECRET 密钥
      { expiresIn: '7d' } // 设置 token 过期时间
    );

    // 4. 返回 token 给前端
    res.status(200).json({ token }); // 这里返回 token
  } catch (error) {
    console.error('登录出错', error);
    res.status(500).json({ message: '服务器错误' });
  }
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
};
