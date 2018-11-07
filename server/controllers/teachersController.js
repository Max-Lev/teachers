var express = require('express');
var app = express();
var router = express.Router();
var fs = require('fs');

var teachers = [];
fs.readFile('server/controllers/teachers-data.json', 'utf8', function (err, data) {
    if (err) return;
    teachers = JSON.parse(data);
})

router.get('/', function (req, res) {
    res.status(200).json(teachers);
});
router.get('/:id', function (req, res) {
    res.send('teachers id')
});

router.get('/:id/location', function (req, res) {
    res.send('location');
});

module.exports = router;
