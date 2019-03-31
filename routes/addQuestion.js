let express = require('express'),
    router = express.Router(),
    QUES = require('../models/questionModel')



    router.post('/addQuestion',(req,res)=>{

        //let quesArr = (req.body.questions).split(',');
        let getObject = {
            title : req.body.title,
            type : req.body.quesType,
            addQuestion : req.body.textbox,
            question : req.body.questions,
            correct : req.body.options

        }
        
        QUES.create(getObject,(err,store)=>{

            if(err){
                console.error(err.message);
            }

            res.redirect('/teacher');
            console.log(store);

        });

    });
    router.get('/addQuestion',(req,res)=>{

        res.render('addQuestion.ejs');

    });

    router.get('/addQuestion/edit/:id',(req,res)=>{
        res.send('edit page'); 
    });

    module.exports = router;