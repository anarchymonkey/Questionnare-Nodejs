let express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    indexRoute = require('./routes/index'),
    questionRoute = require('./routes/addQuestion');
    

    let app = express();
    const methodOverride = require("method-override");
app.use(methodOverride("_method"));

    mongoose.connect('mongodb://localhost/question_db',{ useNewUrlParser: true });

    app.set('view engine','ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended:true}));

    app.use(indexRoute);
    app.use(questionRoute);



    app.listen(3000,'127.0.0.1',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("server running on port 3000");
    });


