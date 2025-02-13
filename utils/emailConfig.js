const nodemailer = require('nodemailer');

/*
Go to the settings for your Google Account in the application or device you are trying to set up. 
Replace your password with the 16-character password shown above.
Just like your normal password, this app password grants complete access to your Google Account. 
You won't need to remember it, so don't write it down or share it with anyone.
*/

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: true
    }
});
require('dotenv').config(); // Load environment variables from .env

const transporter2 = nodemailer.createTransport({
    host: 'smtp.office365.com', // Outlook SMTP server
    port: 587, // Use 587 for STARTTLS
    secure: false, // Must be false for Outlook
    logger: true,
    debug: true,
    auth: {
        user: process.env.EMAIL_USER_2, // Your Outlook email
        pass: process.env.EMAIL_PASS_2  // Your Outlook password or app password
    },
    tls: {
        ciphers: 'SSLv3', // Required for Outlook
        rejectUnauthorized: false // Sometimes needed for Office365
    }
});

module.exports = 
    transporter,
    transporter2;
