const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Database Connected');
        // Call removeDuplicates function after database connection
    })
    .catch((err) => console.log('Database Not Connected', err));
    app.use(express.json());
    app.use('/', require('./routes/estimateRoute'));
    app.use('/', require('./routes/contactRoute'));
    const port = process.env.PORT || 8000;
    app.listen(port, '0.0.0.0', () => console.log(`Server is running on port ${port}`));