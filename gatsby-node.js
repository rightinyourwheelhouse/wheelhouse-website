const createPages = require('./gatsby/createPages');
const sourceNodes = require('./gatsby/sourceNodes');
const onCreateWebpackConfig = require('./gatsby/onCreateWebpackConfig');

module.exports = { createPages, onCreateWebpackConfig, sourceNodes };
