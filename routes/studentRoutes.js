const express=require('express')
const router=express.Router()
const studentController=require('../controller/studentController');
const { ensureAuthendicate, ensureRole } = require('../middleware/auth');


router.get('/dashboard',ensureAuthendicate,ensureRole('student'),studentController.showStudentDashboard)

router.post('/markattendance',ensureAuthendicate,ensureRole('student'),studentController.markAttendance)

module.exports=router