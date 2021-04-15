//Require libraries
const express = require('express');

//App setup

const app = express();

//Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine',  'handlebars');

//Routes
app.get('/',(request,result) =>{
    const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
    result.render('hello-gif',{gifUrl});
})

app.get('/greetings/:name',(req,res) => {
    const name = req.params.name;//grab the name from the path provided
    res.render('greetings',{name});
})


//Start server

app.listen(3000, () => {
    console.log('Gif search listening on port localhost:3000!');
})