const controller = require('./controller');
const { productIdParam } = require('./validation');

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
        path: '/product/{product_id}',
        handler: controller.fetchProductHandler,
        options: {
            validate: {
                params: productIdParam
            }
        }
    }
];
