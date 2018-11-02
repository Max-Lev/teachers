var express = require('express');
var router = express.Router();
router.get('/', getSchools);
function getSchools(req, res) {
    res.send('schools');
};

router.get('/:id', function (req, res) {
    res.send('schools' + req.params.id);
});


module.exports = router;
