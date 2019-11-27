const Boom = require('@hapi/boom');
const fetchAllProducts = require('../../../domain/use_cases/queries/product/fetchAllProducts');

const fetchAllProductsHandler = async (request, h) => {
    return fetchAllProducts();
};

const fetchProductHandler = async (request, h) => {

};

module.exports = {
    fetchAllProductsHandler,
    fetchProductHandler,
};
