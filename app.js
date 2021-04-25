//Require libraries
const express = require('express');

//App setup

const app = express();

//Middleware
const exphbs = require('express-handlebars');

const Tenor = require("tenorjs").client({
    "Key": "PYXCV5GNQGU2", // https://tenor.com/developer/keyregistration
    "Filter": "high", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});

app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine',  'handlebars');

//Routes
// app.get('/',(request,result) =>{
// console.log(request.query)

//     result.render('home');
// })
app.get('/', (req, res) => {
    // Handle the home page when we haven't queried yet
    term = ""
    if (req.query.term) {
        term = req.query.term
    }
    // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
    Tenor.Search.Query(term, "10")
        .then(response => {
            // store the gifs we get back from the search
            const gifs = response;
            // pass the gifs as an object into the home page
            res.render('home', { gifs })
        }).catch(console.error);
  })

app.get('/greetings/:name',(req,res) => {
    const name = req.params.name;//grab the name from the path provided
    res.render('greetings',{name});
})


//Start server

app.listen(3000, () => {
    console.log('Gif search listening on port localhost:3000!');
})