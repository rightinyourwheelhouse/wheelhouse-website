const React = require('react');

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();

  headComponents.sort((a, b) => {
    if (a.props && a.props['data-react-helmet']) {
      return 0;
    }
    return 1;
  });
  replaceHeadComponents(headComponents);
};
