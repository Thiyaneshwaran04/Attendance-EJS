const db=require('../config/db')
const User={
    create:(name,email,password,role,callback)=>{
        const query='INSERT INTO users (name,email,password,role) values(?,?,?,?) ';
        db.query(query,[name,email,password,role],callback)
    },


    findByEmail:(email,callback)=>{
        const query='SELECT * FROM users WHERE email=?'
        db.query(query,[email],callback)
    }
}
module.exports=User