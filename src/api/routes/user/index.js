const controller = require('./controller');

module.exports = [
    {
        method: 'GET',
        path: '/user',
        handler: controller.fetchAllUsersHandler,
        config: {
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/user/{id}',
        handler: controller.fetchUserHandler,
        config: {
            auth: false
        }
    }
];
