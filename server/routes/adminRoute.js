// routes/adminRoute.js
const express = require('express');
const router = express.Router();
const { loginAdmin, getMe,getAdminList,deleteAdmin,addAdmin,changeAdmin} = require('../controllers/adminController');
const { protectAdmin } = require('../middleware/authMiddleware');

// 登录
router.post('/login', loginAdmin);

// 获取当前管理员信息
router.get('/me', protectAdmin, getMe);

// 新增管理员
router.post('/add', protectAdmin, addAdmin); 

// 获取管理员信息列表
router.get('/list', protectAdmin, getAdminList);

//删除管理员（禁止删除自己）
router.delete('/:id', protectAdmin, deleteAdmin);

//修改管理员信息
router.put('/:id', protectAdmin,changeAdmin);
module.exports = router;
