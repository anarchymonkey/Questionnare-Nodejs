
module.exports = function(req,res,next){ 

    if(!req.session.username){
        console.log('not logged in ');
        res.redirect('/signin');
    }
    console.log('logged in');
    next();
}   