const express = require('express');
const ContactController = require('../controller/contactController');
const router = express.Router();
const db= require('./db/DBConnection');

db();
router.post('/submit', ContactController.submitContactDetails);


module.exports = router;