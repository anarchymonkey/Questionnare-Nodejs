let express = require('express'),
    router = express.Router(),
    QUES = require('../models/questionModel')



    router.post('/addQuestion',(req,res)=>{

        let quesArr = (req.body.questions).split(',');
        let getObject = {
            title : req.body.title,
            type : req.body.mcq,
            addQuestion : req.body.textbox,
            question : quesArr,
            correct : req.body.options

        }
        
        QUES.create(getObject,(err,store)=>{

            if(err){
                console.error(err.message);
            }

            res.redirect('/teacher');

        });

    });
    router.get('/addQuestion',(req,res)=>{

        res.render('addQuestion.ejs');

    });

    module.exports = router;