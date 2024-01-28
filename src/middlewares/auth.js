const jwt = require('../lib/jwt');
const SECRET = require('../lib/constants');

exports.auth = async(req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const verifiedToken = await jwt.verify(token, SECRET);
            req.user = verifiedToken;
            next();
        } catch (error) {
            console.log(error);
            res.clearCookie('auth');
            res.redirect('/users/login');
        }
    }else{
        next();
    }
}