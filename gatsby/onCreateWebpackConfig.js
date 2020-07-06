const path = require('path');

function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~api': path.resolve(__dirname, 'src/api'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~data': path.resolve(__dirname, 'src/data'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~images': path.resolve(__dirname, 'src/images'),
        '~layouts': path.resolve(__dirname, 'src/layouts'),
        '~modules': path.resolve(__dirname, 'src/modules'),
        '~pages': path.resolve(__dirname, 'src/pages'),
        '~styles': path.resolve(__dirname, 'src/styles'),
        '~templates': path.resolve(__dirname, 'src/templates'),
        '~utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
}

module.exports = onCreateWebpackConfig;
