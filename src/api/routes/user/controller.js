const Boom = require('@hapi/boom');
const fetchAllUsers = require('../../../domain/use_cases/queries/user/fetchAllUsers');

const fetchAllUsersHandler = async (request, h) => {
    return fetchAllUsers();
};

const fetchUserHandler = async (request, h) => {

};

module.exports = {
    fetchAllUsersHandler,
    fetchUserHandler,
};
