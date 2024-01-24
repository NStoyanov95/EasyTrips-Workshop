const router = require('express').Router();

const homeController = require('./controllers/homeController');
const tripController = require('./controllers/tripController');
const commentController = require('./controllers/commentController');
const userController = require('./controllers/userController');

router.use('/', homeController);
router.use('/trips', tripController);
router.use('/comments', commentController);
router.use('/users', userController);

module.exports = router;