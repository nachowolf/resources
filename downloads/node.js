const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars');
app.use(express.static('public'));


let PORT = process.env.PORT || 3008;

app.listen(PORT, function () {
    console.log('App starting on port', PORT)
})

//npm install express --save
//npm install body-parser --save
//npm install express-handlebars --save
//npm install eslint --save
//npx init eslint
/*
module.exports = {
    "extends": "standard",
    "rules" : {
        "indent": ["error", 4],
        "semi": [2, "always"]
    },
    "globals": {
        "describe" : true,
        "it" : true,
        "require" : true
    }
};
*/