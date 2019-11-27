const Joi = require('@hapi/joi');

const productIdParam = {
    product_id: Joi.string().length(24).required(),
};

module.exports = {
    productIdParam,
};
