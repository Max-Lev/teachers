var express = require('express');
var router = express.Router();
var app = express();

var teachersController = require('./teachersController');
var schoolsController = require('./schoolsController');
var usersController = require('./usersController');

router.use('/teachers', teachersController);
router.use('/schools', schoolsController);
router.use('/',usersController);

// router.get('/', function (req, res) {
//     res.send('home');
// });



module.exports = router;