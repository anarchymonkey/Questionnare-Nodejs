let express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Auth = require('../models/user');
    router.post('/signup',(req,res)=>{

        let gotObject = {username : req.body.username, password : req.body.password };

        Auth.create(gotObject,(err,inserted)=>{
            if(err){
                res.redirect('/student/signup');
            }
            console.log(inserted);
            res.redirect('/student/'+inserted._id);

        });
        
    });
    router.get('/signup',(req,res)=>{
        res.render('signup.ejs');
    });

    router.post('/signin',(req,res)=>{

        let gotObject = {username : req.body.username, password : req.body.password }

        Auth.findOne({username : req.body.username},(err,found)=>{
            if(err){
                res.redirect('/signin');
            }
            else if(found.length == 0){
                
                res.redirect('/signup');
            }
            else if(found.password == req.body.password) {
                console.log(found.password);
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
        res.send('successfully logged out');
    });

    module.exports = router;