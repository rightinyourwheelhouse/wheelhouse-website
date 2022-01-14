import Link from 'gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { memo, useMemo } from 'react';

import AuthorInfo from '~components/AuthorInfo';

import { toShortDate } from '~utils/date';

import gridLayouts from './insightsGrid.layouts';
import {
  InsightsGridItemContainer,
  InsightsGridContainer,
  InsightsGridImage,
  Type,
} from './insightsGrid.styles';

function InsightsGridOverview({ items, layout, reverse }) {
  const InsightsGrid = useMemo(
    () => [...items.slice(1, items.length)],
    [items],
  );

  const {
    author: firstItemAuthor,
    date: firstItemDate,
    description: firstItemDescription,
    image: firstItemImage,
    readTime: firstItemReadTime,
    title: firstItemTitle,
    type: firstItemType,
    url: firstItemUrl,
  } = items[0] || {};

  const ContainerElement = useMemo(() => {
    if (layout === gridLayouts.COLUMN) {
      return React.Fragment;
    }

    return 'div';
  }, [layout]);

  return (
    <InsightsGridContainer layout={layout} reverse={reverse}>
      <ContainerElement>
        {firstItemTitle && (
          <InsightsGridItemContainer>
            <div>
              {firstItemImage && (
                <Link to={firstItemUrl}>
                  <InsightsGridImage>
                    <GatsbyImage
                      objectFit="cover"
                      objectPosition="50% 50%"
                      image={firstItemImage?.childImageSharp?.gatsbyImageData}
                    />
                  </InsightsGridImage>
                </Link>
              )}
              <Type>{firstItemType}</Type>
              <Link to={firstItemUrl}>
                <h3>{firstItemTitle}</h3>
              </Link>
              <p>{firstItemDescription}</p>

              <AuthorInfo
                date={toShortDate(firstItemDate)}
                author={firstItemAuthor}
                readTime={firstItemReadTime}
              />
            </div>
          </InsightsGridItemContainer>
        )}
      </ContainerElement>
      <ContainerElement>
        {InsightsGrid.map(
          ({
            author: itemAuthor,
            date: itemDate,
            description: itemDescription,
            image: itemImage,
            readTime: itemReadTime,
            title: itemTitle,
            type: itemType,
            url: itemUrl,
          }) => (
            <InsightsGridItemContainer key={itemTitle}>
              {itemImage && (
                <Link to={itemUrl}>
                  <InsightsGridImage>
                    <GatsbyImage
                      objectFit="cover"
                      objectPosition="50% 50%"
                      image={itemImage?.childImageSharp?.gatsbyImageData}
                    />
                  </InsightsGridImage>
                </Link>
              )}
              <Type>{itemType}</Type>
              <Link to={itemUrl}>
                <h3>{itemTitle}</h3>
              </Link>
              <p>{itemDescription}</p>

              <AuthorInfo
                date={toShortDate(itemDate)}
                author={itemAuthor}
                readTime={itemReadTime}
              />
            </InsightsGridItemContainer>
          ),
        )}
      </ContainerElement>
    </InsightsGridContainer>
  );
}

InsightsGridOverview.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.shape({}),
      readTime: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  layout: PropTypes.oneOf(
    Object.keys(gridLayouts).map(key => gridLayouts[key]),
  ),
  reverse: PropTypes.bool,
};

InsightsGridOverview.defaultProps = {
  items: [],
  layout: gridLayouts.HIGHLIGHT,
  reverse: false,
};

export default memo(InsightsGridOverview);
