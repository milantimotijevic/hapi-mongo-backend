const mongoose = require('mongoose');

const fetchAll = function() {
    return mongoose.models.Product.find({});
};

const findOne = function(_id) {
    return mongoose.models.Product.find({ _id });
};

module.exports = {
    fetchAll,
    findOne
};

