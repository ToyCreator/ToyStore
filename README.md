# Toystore

Toystore 是一个全栈电子商务平台，分为前端和后端两部分，使用 React 构建前端，Node.js + Express 构建后端，数据库使用 MongoDB。

## 项目结构

- **client**: 前端应用，使用 React 和其他现代前端技术。
- **server**: 后端应用，使用 Node.js 和 Express 提供 RESTful API，连接 MongoDB 数据库。

## 技术栈

- **前端**: React, React Router, Axios, Redux (可选)
- **后端**: Node.js, Express.js
- **数据库**: MongoDB, Mongoose
- **认证**: JWT（Json Web Tokens）
- **环境管理**: dotenv
- **部署**: Heroku（或其他服务器）

## 功能特性

- 用户注册与登录（支持 JWT 认证）
- 商品展示、搜索与筛选
- 购物车功能
- 订单管理（用户可查看订单历史）
- 后台管理（管理员可增删商品、查看订单）

## 安装与运行

### 克隆项目

首先，克隆这个仓库到本地：

```bash
git clone https://github.com/yourusername/toystore.git
cd toystore
