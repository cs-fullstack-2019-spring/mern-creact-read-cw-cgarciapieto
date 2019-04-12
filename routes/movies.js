let express = require('express');
let router = express.Router();
let MovieCollection = require('../models/movieSchema');


router.get('/find', function (req, res,) {
    MovieCollection.find(req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

router.post('/create', function (req, res,) {
    MovieCollection.create(req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

module.exports = router;
