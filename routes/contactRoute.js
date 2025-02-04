const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const { submitContact } = require('../controls/contactControl');

router.use(
    cors({
        credentials: true,
        origin: 'http://eloquent-lamington-957e5e.netlify.app'
    })
);

// Use bodyParser to parse URL-encoded and JSON data
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/contact-us', submitContact);

module.exports = router;
