const router = require('express').Router();

const homeController = require('./controllers/homeController');
const tripController = require('./controllers/tripController');
const commentController = require('./controllers/commentController');

router.use('/', homeController);
router.use('/trips', tripController);
router.use('/comments', commentController);

module.exports = router;