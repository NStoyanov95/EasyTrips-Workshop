const router = require('express').Router();
const userManager = require('../manager/userManager');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async(req, res) => {
    const { username, password } = req.body;

   const token = await userManager.login(username, password);

    res.cookie('auth', token);

    res.redirect('/');

});


router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register', async (req, res) => {
    const { username, password, rePass } = req.body;

    await userManager.register({ username, password, rePass });

    res.redirect('/users/login');

});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    
    res.redirect('/');
  });

module.exports = router;