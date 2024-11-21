
const express = require('express');
const logInrouter = require('./logInRouter');
const userRouter = require('./userRouter');
const router = express.Router();

router.use('/logIn', logInrouter);
router.use('/user', userRouter);

module.exports = router;





