const express = require('express');
const {signUp, signIn} = require('../controllers/loginController');
const router = express.Router();

router.post('/api/signup', signUp);
router.post('/api/signin', signIn);

module.exports = router;