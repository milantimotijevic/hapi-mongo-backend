const ProductRepository = require('../../../../repository/ProductRepository');

module.exports = function() {
    return ProductRepository.fetchAll();
};
