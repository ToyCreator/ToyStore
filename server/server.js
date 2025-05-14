const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoute');
const productRoutes = require('./routes/productRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors');
// Load environment variables
dotenv.config();
// console.log(process.env.MONGO_URI)
// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
// Middleware
app.use(express.json());  // Parse JSON data

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/products', productRoutes);



app.use(errorMiddleware);

// Start server
// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
