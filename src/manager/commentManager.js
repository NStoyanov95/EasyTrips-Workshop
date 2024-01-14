const Comment = require('../models/Comment');

exports.addComment = (commentData) => Comment.create(commentData);

exports.deleteComment = (id) => Comment.findByIdAndDelete(id);