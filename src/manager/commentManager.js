const Comment = require('../models/Comment');

exports.addComment = (commentData) => Comment.create(commentData);