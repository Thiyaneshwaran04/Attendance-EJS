const db=require('../config/db')
const Attendance={
    // Student insert data
    markAttendance:(user_id,date,status,name,callback)=>{
         const query='INSERT INTO attendance (user_id,date,status,name) values(?,?,?,?) ';
        db.query(query,[user_id,date,status,name],callback)

    },
    //Staff
    getAllattendance:(callback)=>{
        const query='SELECT * FROM attendance'
        db.query(query,callback) 
    },
    //Get User
    getAttendanceByUser:(user_id,callback)=>{
        const query='SELECT * FROM attendance WHERE user_id'
        db.query(query,[user_id],callback)
    }

}
module.exports=Attendance;
