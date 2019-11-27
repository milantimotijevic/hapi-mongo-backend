const Boom = require('@hapi/boom');

module.exports = (server, options) => {
    return {
        authenticate: async (request, h) => {
            // const { token } = request.headers;
            // const user = await getUserByToken(token);
            //
            // if (!user) {
            //     throw Boom.unauthorized('You must log in');
            // }
            const user = {
                id: 'abc123',
                scope: ['USER']
            };

            return h.authenticated({credentials: {
                    user_id: user.id,
                    scope: user.roles
                }});
        }
    }
};
