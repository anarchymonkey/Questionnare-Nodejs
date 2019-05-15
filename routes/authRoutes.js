let express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Auth = require('../models/user');
    
    
    router.post('/signup',(req,res)=>{

        let gotObject = {username : req.body.username, password : req.body.password , email : req.body.email};

        Auth.create(gotObject,(err,inserted)=>{
            if(err){
                res.redirect('/student/signup');
            }
            console.log(inserted);
            res.redirect('/signin');
        });
    });

    router.get('/signup',(req,res)=>{
        res.render('signup.ejs');
    });

    router.post('/signin',(req,res)=>{

        let gotObject = {username : req.body.username, password : req.body.password}
        Auth.findOne({username : req.body.username},(err,found)=>{
            if(err){
                res.redirect('/signin');
            }
            else if(found.length == 0){
                res.redirect('/signup');
            }
            else if(found.password == req.body.password) {

                req.session.id = found._id;
                req.session.username = found.username;
                req.session.password = found.password;
                req.session.email = found.email;
                res.redirect('/student/'+found._id);    
            }
            else{
            res.redirect('/signin');
            }
           });
    });

    router.get('/signin',(req,res)=>{
        res.render('signin.ejs');
    });

    router.get('/logout',(req,res)=>{

        req.session.destroy((err)=>{
            if(err){
                console.log('user cannot be logged out');
            }
            res.redirect('/signin');
        });
        
    });

    module.exports = router;