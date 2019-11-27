const mongoose = require('mongoose');

// TODO move connection string to env file
mongoose.connect('mongodb://localhost:27017/superawesomedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    require('./model');
    const userRepo = require('./UserRepository');

    const users = await userRepo.fetchAll();
    console.log(users)
});

const db = mongoose.connection;
// TODO handle connection error better
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connection with DB established');
});
