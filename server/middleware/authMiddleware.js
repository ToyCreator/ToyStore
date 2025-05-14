// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');

const protectAdmin = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await Admin.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({ message: '未授权访问' });
      }

      next();
    } catch (error) {
      res.status(401).json({ message: 'Token无效' });
    }
  }

  if (!token) {
    res.status(401).json({ message: '未提供Token' });
  }
};

module.exports = { protectAdmin };
