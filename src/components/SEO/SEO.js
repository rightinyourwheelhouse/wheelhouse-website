import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import { COMPANY_NAME_SHORT } from '~data/company';

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

    defaultImage: file(name: { eq: "default-image" }) {
      childImageSharp {
        resize(width: 900) {
          src
        }
      }
    }
  }
`;

const SEO = ({
  lang, title, description, meta, image, article,
}) => {
  const { pathname } = useLocation();
  const { site, defaultImage } = useStaticQuery(query);

  const {
    author,
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = site.siteMetadata;

  const imageUrl = useMemo(() => {
    if (!image) {
      const { childImageSharp: { resize: { src } } } = defaultImage;
      return `${siteUrl}${src}`;
    }

    const { childImageSharp: { resize: { src } } } = image;
    return `${siteUrl}${src}`;
  }, [siteUrl, image]);

  const metaDescription = description || defaultDescription;
  const metaTitle = title || defaultTitle;
  const metaType = article ? 'article' : 'website';
  const url = `${siteUrl}${pathname}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${COMPANY_NAME_SHORT}`}
      meta={[
        {
          content: metaDescription,
          name: 'description',
        },
        {
          content: metaTitle,
          property: 'og:title',
        },
        {
          content: url,
          property: 'og:url',
        },
        {
          content: imageUrl,
          property: 'og:image',
        },
        {
          content: metaDescription,
          property: 'og:description',
        },
        {
          content: metaType,
          property: 'og:type',
        },
        {
          content: 'summary_large_image',
          name: 'twitter:card',
        },
        {
          content: author,
          name: 'twitter:creator',
        },
        {
          content: title,
          name: 'twitter:title',
        },
        {
          content: metaDescription,
          name: 'twitter:description',
        },
        {
          content: imageUrl,
          name: 'twitter:image',
        },
      ].concat(meta)}
    />
  );
};

SEO.propTypes = {
  article: PropTypes.bool,
  description: PropTypes.string,
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      resize: PropTypes.shape({
        src: PropTypes.string,
      }),
    }),
  }),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

SEO.defaultProps = {
  article: false,
  description: null,
  image: null,
  lang: 'en',
  meta: [],
  title: null,
};

export default SEO;
