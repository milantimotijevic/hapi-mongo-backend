const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: 'String',
    description: 'String'
});

mongoose.model('Product', schema);
