
const express = require('express');
const router = require('./router/Index');
const bodyParser = require('body-parser');
const dataBase = require('./configFile/dataBase');
const app = express();
const PORT = 3003;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

app.listen(PORT, (err) => {

    if(!err){
        console.log(`Server running on http://localhost:${PORT}`);
    }

})






