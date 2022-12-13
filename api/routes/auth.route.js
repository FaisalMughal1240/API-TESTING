const express = require('express');
const auth = require('./../controller/auth.controller');
const authMiddleWare = require('./../middlewares/auth.middleware');
const uploadfile = require('./../middlewares/upload-middleware'); 
const router = express.Router();
router.post('/login',auth.login);
// authMiddleWare.auth,
router.post('/user',auth.user);
router.get('/users',auth.users);
router.post('/upload-file', uploadfile.single('profile'), auth.upload);
router.post('/signup', auth.signup);
module.exports = router;