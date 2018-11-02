var express = require('express');
var app = express();
var router = express.Router();
var fs = require('fs');
var usersData = [];
fs.readFile('server/controllers/users-data.json', 'utf8', function (err, data) {
    if (err) throw err;
    usersData = JSON.parse(data);
});

router.get('/', getUsers);

function getUsers(req, res) {
    res.json(usersData);
};

module.exports = router;