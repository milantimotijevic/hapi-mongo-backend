const controller = require('./controller');

module.exports = [
    {
        method: 'GET',
        path: '/product',
        handler: controller.fetchAllProductsHandler,
        config: {
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/product/{id}',
        handler: controller.fetchProductHandler,
        config: {
            auth: false
        }
    }
];
