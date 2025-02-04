const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const { submitEstimate } = require('../controls/estimateControl');

router.use(
    cors({
        credentials: true,
        origin: 'https://eloquent-lamington-957e5e.netlify.app/'
    })
);

// Use bodyParser to parse URL-encoded and JSON data
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/estimate', submitEstimate);

module.exports = router;
