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
      


    module.exports = router;
