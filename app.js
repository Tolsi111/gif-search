//Require libraries
const express = require('express');

//App setup

const app = express();

//Middleware

//Routes
app.get('/',(request,result) =>{
    result.send('Hello world!!!1');
})


//Start server

app.listen(3000, () => {
    console.log('Gif search listening on port localhost:3000!');
})