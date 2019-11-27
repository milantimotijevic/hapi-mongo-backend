const Hapi = require('@hapi/hapi');
const customAuthScheme = require('./authentication/custom-auth-scheme');

const server = new Hapi.Server({
    port: '3000',
    host: 'localhost'
    // TODO use env file
});

module.exports = {
    start: async () => {
        server.auth.scheme('custom-auth-scheme', customAuthScheme);
        server.auth.strategy('custom-auth-strategy', 'custom-auth-scheme');
        server.auth.default('custom-auth-strategy');

        const routes = require('./routes');
        routes.forEach(route => {
            server.route(route);
        });

        server.start();
    }
};
