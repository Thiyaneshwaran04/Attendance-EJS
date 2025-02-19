
const Attendance=require('../models/Attendance')

const showStudentDashboard = (req, res) => {
    const userId = req.session.user.id;

    Attendance.getAttendanceByUser(userId, (err, results) => {
        if (err) return res.status(500).send('Database error');
        res.render('student/dashboard', { records: results });
       
        
    });
};

const markAttendance=(req,res)=>{
    const userId= req.session.user.id;
    const date=new Date().toISOString().slice(0,10)
    const status="Present";
const name="Thiyaneshwaran"

    Attendance.markAttendance(userId,date,status,name,(err)=>{
        if (err) return res.status(500).send('Error marking Attendance');
        res.redirect('/student/dashboard');

    })
}

module.exports={showStudentDashboard,markAttendance}