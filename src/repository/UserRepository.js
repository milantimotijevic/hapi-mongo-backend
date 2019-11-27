const mongoose = require('mongoose');

const fetchAll = function() {
    return mongoose.models.User.find({});
};

const findOne = function(_id) {
    return mongoose.models.User.find({ _id });
};

module.exports = {
    fetchAll,
    findOne
};

