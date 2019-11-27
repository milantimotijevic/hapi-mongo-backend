const UserRepository = require('../../../../repository/UserRepository');

module.exports = function() {
    return UserRepository.fetchAll();
};
