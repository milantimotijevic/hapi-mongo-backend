const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    first_name: 'String',
    last_name: 'String',
    age: 'Number',
});

mongoose.model('User', schema);
