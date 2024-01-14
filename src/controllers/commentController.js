const router = require('express').Router();

const commentManager = require('../manager/commentManager');
const tripManager = require('../manager/tripManager')


router.get('/add/:id', (req, res)=>{

    res.render('addComments');
});


router.post('/add/:id', async (req, res)=>{
    const commentData = req.body;
    const comment = await commentManager.addComment(commentData);
    tripManager.attachComment(req.params.id, comment._id);
    
    res.redirect(`/trips/details/${req.params.id}`);
});

router.get('/delete/:id', async (req, res)=>{
   await commentManager.deleteComment(req.params.id);

    res.redirect(`/`);

});
module.exports = router;