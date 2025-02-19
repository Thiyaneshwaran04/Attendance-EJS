const ensureAuthendicate = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.redirect("/login")
};


const ensureRole=(role)=>((req, res, next)=>{
    if(req.session.user && req.session.user.role ===role){
        return next()
    }
    res.redirect('/login')
})


module.exports={ensureAuthendicate,ensureRole} 