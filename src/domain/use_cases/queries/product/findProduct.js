const ProductRepository = require('../../../../repository/ProductRepository');

module.exports = function(product_id) {
    return ProductRepository.findOne(product_id);
};
