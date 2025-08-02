const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');

const app = express();

// ✅ Security Middleware
app.use(helmet()); // Secure headers
app.use(xss()); // Prevent XSS
app.use(compression()); // GZIP compression

// Limit repeated requests from the same IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// ✅ CORS Configuration
app.use(cors({
  credentials: true,
  origin: ['https://www.skylinebuildersgallc.com'] // adjust for production
}));

// ✅ Parse JSON
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('✅ Database Connected');
    // If you want to call a cleanup function here, do it now
  })
  .catch((err) => console.error('❌ Database Not Connected', err));

// ✅ Routes
app.use('/', require('./routes/estimateRoute'));
app.use('/', require('./routes/contactRoute'));

// ✅ Start Server
const port = process.env.PORT || 8000;
app.listen(port, '0.0.0.0', () => console.log(`🚀 Server running on port ${port}`));
