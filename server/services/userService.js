// server/services/userService.js
import User from "../models/userModel.js"; // Mongoose 模型
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// 注册
export async function registerUser({ name, email, password }) {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("用户已存在");

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashed });
  return await user.save();
}

// 登录
export async function loginUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("用户不存在");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("密码错误");

  // 可选：返回 JWT
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return { user, token };
}

// 根据 ID 获取用户
export async function getUserById(id) {
  return await User.findById(id).select("-password");
}

// 更新用户
export async function updateUser(id, updateData) {
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }
  return await User.findByIdAndUpdate(id, updateData, { new: true });
}

// 删除用户
export async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}

// 获取所有用户
export async function getAllUsers() {
  return await User.find().select("-password");
}
