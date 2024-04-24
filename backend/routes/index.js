const express = require('express');
const userRouter = require("../routes/user"); 
const AccountRouter = require("../routes/account")

const router = express.Router();
router.use("/user", userRouter)
router.use("/account",AccountRouter)
module.exports= router;
