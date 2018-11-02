var express = require('express');
var app = express();
var router = express.Router();


router.get('/', function (req, res) {
    res.send('teachers')
});
router.get('/:id', function (req, res) {
    res.send('teachers id')
});

router.get('/:id/location', function (req, res) {
    res.send('location');
});

module.exports = router;


