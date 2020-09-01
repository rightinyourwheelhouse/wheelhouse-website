import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;

const SEO = ({
  lang, title, description, image, article,
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = site.siteMetadata;

  const imageUrl = image ? `${siteUrl}${image}` : null;

  const seo = {
    description: description || defaultDescription,
    image: imageUrl,
    title: title || defaultTitle,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate="%s | Wheelhouse Agency"
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

SEO.propTypes = {
  article: PropTypes.bool,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
};

SEO.defaultProps = {
  article: false,
  description: null,
  image: null,
  lang: 'en',
  title: null,
};

export default SEO;
