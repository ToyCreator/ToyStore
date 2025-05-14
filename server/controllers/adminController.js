// controllers/adminController.js
const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
// 生成 JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// @desc    登录管理员
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
console.log(await admin.matchPassword(password))
    if (admin && (await admin.matchPassword(password))) {
      res.json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: '用户名或密码错误' });
    }
  } catch (err) {
    res.status(500).json({ message: '服务器错误', error: err.message });
  }
};

// @desc    获取管理员信息（测试接口）
// @route   GET /api/admin/me
// @access  Private
const getMe = async (req, res) => {
  const admin = await Admin.findById(req.user.id).select('-password');
  res.json(admin);
};
// 添加管理员（保护路由）
const addAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const exist = await Admin.findOne({ username });
    if (exist) {
      return res.status(400).json({ message: '该管理员已存在' });
    }

    const newAdmin = new Admin({ username, password });
    await newAdmin.save();

    res.status(201).json({ message: '管理员添加成功' });
  } catch (err) {
    res.status(500).json({ message: '服务器错误', error: err.message });
  }
};

// 获取管理员信息列表
// controllers/adminController.js
const getAdminList = async (req, res) => {
  const admins = await Admin.find().select('-password');
  res.json(admins);
};


//删除管理员信息
const deleteAdmin = async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  if (!admin) {
    return res.status(404).json({ message: '管理员不存在' });
  }

  // 可选：禁止删除当前登录账号
  if (admin._id.toString() === req.user.id) {
    return res.status(400).json({ message: '不能删除自己' });
  }

  await admin.deleteOne();
  res.json({ message: '管理员已删除' });
};

// 修改管理员信息
const changeAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findById(req.params.id);

    if (!admin) {
      return res.status(404).json({ message: '管理员不存在' });
    }

    if (username) admin.username = username;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);
    }

    await admin.save();
    res.json({ message: '管理员更新成功' });
  } catch (error) {
    res.status(500).json({ message: '更新失败', error: error.message });
  }
}
module.exports = {
  loginAdmin,
  getMe,
  getAdminList,
  deleteAdmin,
  addAdmin,
  changeAdmin
};
