const mongoose = require('mongoose');
const model = mongoose.models.User;

const fetchAll = function() {
    return model.find({});
};

module.exports = {
    fetchAll,
};

