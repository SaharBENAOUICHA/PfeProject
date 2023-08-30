const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/UserControllers');
const User = require('../models/userModel');


router.post('/addUser', UserCtrl.AddUser);
router.post('/login', UserCtrl.Login);


module.exports = router;