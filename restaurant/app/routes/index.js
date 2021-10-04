/*============================<<< index.js >>>===============================*/

const routes = require('./routes');

// Export module
module.exports = function(app, database) {
    routes(app, database);
};