let express = require('express'),
    router = express.Router(),
    QUES = require('../models/questionModel'),
    isAuthenticated = require('../middleware/authMiddlewares.js');


    router.get('/',(req,res)=>{
        console.log('home page access');
        res.render('homepage.ejs');
    });

    router.get('/teacher',(req,res)=>{

        QUES.find({},(err,found)=>{

            if(err){
                console.log(err);
            }
            console.log(found);
            res.render('index.ejs',{data:found});
        });
    });
    router.delete("/teacher/:id",function(req,res){
        QUES.findOneAndDelete(req.params.id,function (err) {
          if(err)
          {
            res.redirect("/teacher");
          }
          else
          {
            res.redirect("/teacher");
          }
        });
      });
      router.get('/student/:id',(req,res)=>{
        let id = req.params.id;
        QUES.find({},(err,found)=>{
          if(err){
            console.log(err);
          }
          res.render('studentAccess',{data:found,id : id});
        });
        
      });
      
      router.get('/student/:id/score',(req,res)=>{
        let id = req.params.id;
          res.render('scorePage');
      });



    module.exports = router;
