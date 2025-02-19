const bcrypt = require('bcryptjs')
const User = require('../models/User')
const registerUser = (req, res) => {
    const { name, email, password, role } = req.body
    
    
    //check if email exist
    User.findByEmail(email, (err, result) => {
        if (err) return res.status(500).send("Database error");
        if (result.length > 0) {
            req.flash('Error', 'Already Email exist Please Register')
            return res.redirect('/register')
        }
    })


    //Hash the Password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).send('Error Handling');


        User.create(name, email, hash, role, (err) => {
            if (err){
                console.log(err);
                
                return  res.status(500).send('Error creating data');
            } 
            req.flash('Success', 'Registration Successfull Please Login')
            res.redirect('/login');
        })

    })

}

//login User
const LoginUser = (req, res) => {
    const { email, password } = req.body
    User.findByEmail(email, (err, results) => {
        // console.log(results);

        if (err || results === 0) {
            req.flash('Error', 'Invalid Email or Password');
            return res.redirect('/login');
        }
        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) {
                req.flash('Error', 'Invalid Email or Password')
                return res.redirect('/login')

            }
            req.session.user = user
            res.redirect(user.role === 'staff' ? 'staff/dashboard' : 'student/dashboard')
        })
    })


}


const showLoginpage = (req, res) => {
    res.render('auth/login', { message: req.flash('Error') })
}
const showRegisterpage = (req, res) => {
    res.render('auth/register', { message: req.flash('Error') })

}

module.exports = { registerUser, LoginUser, showLoginpage, showRegisterpage }