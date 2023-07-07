const {register,uploadProfilePics} = require('../controllers/user.controller')
const upload = require('../utils/multer')
const express = require('express')
const router = express.Router();

router.post('/register',register);
router.patch('/user/:id',upload.single('profile-pics'),uploadProfilePics)



module.exports = router