let express = require('express'),
    router = express.Router(),
    QUES = require('../models/questionModel');


    router.get('/',(req,res)=>{
        res.redirect('/teacher');
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
      router.get('/student',(req,res)=>{

        QUES.find({},(err,found)=>{
          if(err){
            console.log(err);
          }
          res.render('studentAccess',{data:found});
        });
        
      });
      
      router.get('/student/score',(req,res)=>{

          res.render('scorePage');
      });



    module.exports = router;
