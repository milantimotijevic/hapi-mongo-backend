const mongoose = require('mongoose');

const fetchAll = function() {
    return mongoose.models.User.find({});
};

const findOne = function(user_id) {
    return mongoose.models.User.find({ _id: user_id });
};

module.exports = {
    fetchAll,
    findOne
};

