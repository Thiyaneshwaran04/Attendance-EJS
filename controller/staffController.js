const Attendance=require('../models/Attendance')

const staffPage=(req,res)=>{
   if(req.session.user.role!=='staff'){
    req.flash('error','Your Staff Login')
   }

   Attendance.getAllattendance((err,result)=>{
    if(err) return res.status(500).send("Database error",);
    res.render('staff/dashboard', { records: result });

   })
}
module.exports={staffPage}


