const express=require('express');
const session=require('express-session');
const bodyParser=require('body-parser');
const flash=require('connect-flash')
const path=require('path');
require('dotenv').config();
const app =express();
const authRoutes=require('./routes/authRoutes');
const staffRoutes=require('./routes/staffRoutes')
const studentRoutes=require('./routes/studentRoutes')

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(session({secret:process.env.SESSION_SECRET,resave:false,saveUninitialized:true}));
app.use(flash())

// set ejs
app.set('view engine','ejs')

// Routes 
app.use('/',require('./routes/authRoutes'));
app.use('/staff',staffRoutes);
app.use('/student',studentRoutes)


// Start Server 
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Running Server at http://localhost:${3000}`);
    console.log("Database :",process.env.DB_HOST);
    
    
})
