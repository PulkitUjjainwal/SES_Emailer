const express = require('express');
const { sendEmailsMi , sendEmailsEg } = require('../controllers/emailController');

const router = express.Router();

router.post('/send-email-mi', sendEmailsMi);
router.post('/send-email-eg', sendEmailsEg)


module.exports = router;
