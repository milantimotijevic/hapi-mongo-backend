const mongoose = require('mongoose');

const fetchAll = function() {
    return mongoose.models.Product.find({});
};

const findOne = function(product_id) {
    return mongoose.models.Product.find({ _id: product_id });
};

module.exports = {
    fetchAll,
    findOne
};

