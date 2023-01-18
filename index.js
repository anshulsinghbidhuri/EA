// const express = require('express');
// const port = 9000;
// const app = express();

// const db= require("./config/mongoose");
// const MongoStore= require("connect-mongo");


// const session = require('express-session');

// app.use(express.urlencoded());

// app.use(session({
//     name: 'EA',
//     // TODO change the secret before deployment in production mode
//     secret: "blahsomething",
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//         maxAge : (1000 * 60 * 100)
//     },
//     store: MongoStore.create(
//         {
//             mongoUrl: 'mongodb://localhost/EA',
//             mongooseConnection: db,
//             autoRemove: false
//         },
//         function(err){
//             console.log(err || 'connect-mongodb setup ok')
//         }
//     )
// }));




// // use express router
// app.use('/',require('./routes'));



// app.listen(port,function(err){
//     if(err){
//         console.log(`Error in connection the database ${err}`);
//         return;
//     }
//     console.log(`Server is running at the port ${port}`);
// })
const express = require('express');
const port = 9000;
const app = express()
const db = require('./config/mongoose');
// const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
app.use(express.urlencoded());
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in connecting the server ${err}`);
    }
    console.log(`Server is running at the port ${port}`);
})