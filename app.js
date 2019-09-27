const express = require('express');
const exphbs  = require('express-handlebars');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')

dotenv.config();

const app = express();

//express-handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Servir arquivos staticos */
app.use(express.static('public'));

//porta do servidor
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.render('index')
});

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
});