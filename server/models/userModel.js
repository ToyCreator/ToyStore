const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// 定义用户模型的 schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '用户名不能为空'],
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, '邮箱不能为空'],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, '邮箱格式不正确'],
  },
  password: {
    type: String,
    required: [true, '密码不能为空'],
    minlength: 6,
    select: false, // 查询用户时默认不返回密码
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// 保存用户之前对密码加密
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // 密码未修改则跳过

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 添加方法：比较密码
userSchema.methods.comparePassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
