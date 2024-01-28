const { MongooseError } = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const SECRET = require('../lib/constants');

exports.register = (userData) => User.create(userData);


exports.login = async (username, password) => {
    const user = await User.findOne({ username });

    if (!user) {
        throw new MongooseError('Invalid username or password!');
    };

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new MongooseError('Invalid username or password!');
    };

    const payload = {
        _id: user._id,
        username: user.username,
    };

    const token = jwt.sign(payload, SECRET, {expiresIn: '1d'});
    return token;
}