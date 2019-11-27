const Boom = require('@hapi/boom');
const fetchAllProducts = require('../../../domain/use_cases/queries/product/fetchAllProducts');
const findProduct = require('../../../domain/use_cases/queries/product/findProduct');

const fetchAllProductsHandler = async (request, h) => {
    return fetchAllProducts();
};

const fetchProductHandler = async (request, h) => {
    const { product_id } = request.params;
    return findProduct(product_id);
};

module.exports = {
    fetchAllProductsHandler,
    fetchProductHandler,
};
