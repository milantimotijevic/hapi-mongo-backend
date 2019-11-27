const Joi = require('@hapi/joi');

const userIdParam = {
    user_id: Joi.string().length(24).required(),
};

module.exports = {
    userIdParam,
};
