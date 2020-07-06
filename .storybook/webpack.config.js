const path = require('path');

const pathToInlineSvg = path.resolve(__dirname, '../src/images');

module.exports = ({ config }) => {
  const rules = config.module.rules;

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
  fileLoaderRule.exclude = pathToInlineSvg;

  rules.push({
    test: /\.svg$/,
    include: pathToInlineSvg,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
      },
    }],
  });

  config.resolve.alias = {
    "~api": path.resolve(__dirname, "..", "src", "api"),
    "~components": path.resolve(__dirname, "..", "src", "components"),
    "~data": path.resolve(__dirname, "..", "src", "data"),
    "~hooks": path.resolve(__dirname, "..", "src", "hooks"),
    "~images": path.resolve(__dirname, "..", "src", "images"),
    "~layouts": path.resolve(__dirname, "..", "src", "layouts"),
    "~modules": path.resolve(__dirname, "..", "src", "modules"),
    "~pages": path.resolve(__dirname, "..", "src", "pages"),
    "~styles": path.resolve(__dirname, "..", "src", "styles"),
    "~templates": path.resolve(__dirname, "..", "src", "templates"),
    "~utils": path.resolve(__dirname, "..", "src", "utils"),
  }

  return config;
};