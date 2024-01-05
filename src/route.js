const router = require('express').Router();

const homeController = require('./controllers/homeController');
const tripController = require('./controllers/tripController');

router.use('/', homeController);
router.use('/trips', tripController);


module.exports = router;