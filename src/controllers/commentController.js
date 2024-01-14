const router = require('express').Router();


router.get('/add', (req, res)=>{

    res.render('addComments');
});


module.exports = router;