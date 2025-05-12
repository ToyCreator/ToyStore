// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (err) {
      return res.status(401).json({ message: '未授权访问（Token无效）' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: '缺少Token，拒绝访问' });
  }
};

module.exports = { protect };
