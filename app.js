let express = require('express'),
    bodyParser = require('body-parser'), // use to get data from form by the name feild.  
    mongoose = require('mongoose'),
    indexRoute = require('./routes/index'),
    questionRoute = require('./routes/addQuestion'),
    authRoute = require('./routes/authRoutes');

    let app = express();
    const methodOverride = require("method-override");
app.use(methodOverride("_method"));

    mongoose.connect('mongodb://localhost/question_db',{ useNewUrlParser: true });

    app.set('view engine','ejs'); // for searching templating engine ejs.
    app.use(express.static('public')); // for making the app understand that css js file will be in public folder.
    app.use(bodyParser.urlencoded({extended:true})); // syntax for including bodyParser module.

    app.use(indexRoute);
    app.use(questionRoute);
    app.use(authRoute);



    app.listen(3000,'127.0.0.1',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("server running on port 3000");
    });


