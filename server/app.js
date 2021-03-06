var express = require('express');
var app = express();
var port = 3000 || process.env.PORT;
var router = express.Router();

var controllers = require('./controllers/index');

app.use('/', controllers);

app.listen(port, () => {
    console.log(`server: http://localhost:${port}`);
});