const express=require('express')
const authController=require('../controller/authController');
const router=express.Router()

//Register User
router.post('/register',authController.registerUser)

//Login User
router.post('/login',authController.LoginUser)

router.get('/login',authController.showLoginpage)

router.get('/register',authController.showRegisterpage)



module.exports=router