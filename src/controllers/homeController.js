const router = require('express').Router();
const tripManager = require('../manager/tripManager');


router.get('/', async (req, res) => {
    const cubes = await tripManager.getAllTrips().lean();
    console.log(cubes);
    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
