const router = require('express').Router();
const tripManager = require('../manager/tripManager');


router.get('/', async (req, res) => {
    const trips = await tripManager.getAllTrips().lean();

    res.render('index', { trips });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
