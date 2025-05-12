const express = require('express');
const router = express.Router();
const { getUsers, registerUser, loginUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// 公开接口
router.post('/register', registerUser);
router.post('/login', loginUser);

// 受保护接口：必须登录才能访问
router.get('/', protect, getUsers);

module.exports = router;
