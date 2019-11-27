const controller = require('./controller');
const { userIdParam } = require('./validation');

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
        path: '/user/{user_id}',
        handler: controller.fetchUserHandler,
        options: {
            validate: {
                params: userIdParam
            }
        }
    }
];
