const express=require('express')
const router=express.Router()
const staffController=require('../controller/staffController');
const { ensureAuthendicate, ensureRole } = require('../middleware/auth');


router.get('/dashboard',ensureAuthendicate,ensureRole('staff'),staffController.staffPage)


module.exports=router