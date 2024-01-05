const router = require('express').Router();
const tripManager = require('../manager/tripManager');


router.get('/', (req, res) => {
    const cubes = tripManager.getAllTrips();
    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;

