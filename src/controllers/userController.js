const router = require('express').Router();
const userManager = require('../manager/userManager');

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req,res)=>{
    res.render('register')
});

router.post('/register', async(req,res)=>{
    const {username, password, rePass} = req.body;

    await userManager.register({username, password, rePass});

    res.redirect('/');


});

module.exports = router;