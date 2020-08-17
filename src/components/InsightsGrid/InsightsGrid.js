import React, {
  memo, useCallback, useState, useMemo,
} from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Info from '~components/Info';

import {
  InsightsGridItemContainer,
  InsightsGridContainer,
  InsightsGridImage,
  Type,
} from './insightsGrid.styles';

import gridLayouts from './insightsGrid.layouts';

const InsightsGridOverview = ({ items, layout, reverse }) => {
  const [firstItemHeight, setfirstItemHeight] = useState(0);

  const InsightsGrid = useMemo(() => [...items.slice(1, items.length)], [items]);

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

  const refCallback = useCallback((node) => {
    if (node) {
      setfirstItemHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const ContainerElement = useMemo(() => {
    if (layout === gridLayouts.COLUMN) {
      return React.Fragment;
    }

    return 'div';
  }, [layout]);

  return (
    <InsightsGridContainer stickyHeight={firstItemHeight} layout={layout} reverse={reverse}>
      <ContainerElement>
        {firstItemTitle && (
          <InsightsGridItemContainer>
            <div ref={refCallback}>
              {firstItemImage && (
              <Link to={firstItemUrl}>
                <InsightsGridImage>
                  <Img fluid={firstItemImage.childImageSharp.fluid} />
                </InsightsGridImage>
              </Link>
              )}
              <Type>{firstItemType}</Type>
              <Link to={firstItemUrl}>
                <h3>{firstItemTitle}</h3>
              </Link>
              <p>{firstItemDescription}</p>

              <Info
                date={firstItemDate}
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
                  <Img fluid={itemImage.childImageSharp.fluid} />
                </InsightsGridImage>
              </Link>
              )}
              <Type>{itemType}</Type>
              <Link to={itemUrl}>
                <h3>{itemTitle}</h3>
              </Link>
              <p>{itemDescription}</p>

              <Info
                date={itemDate}
                author={itemAuthor}
                readTime={itemReadTime}
              />
            </InsightsGridItemContainer>
          )
        )}
      </ContainerElement>
    </InsightsGridContainer>
  );
};

InsightsGridOverview.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      readTime: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  layout: PropTypes.oneOf(Object.entries(gridLayouts)),
  reverse: PropTypes.bool,
};

InsightsGridOverview.defaultProps = {
  items: [],
  layout: 'highlight',
  reverse: false,
};

export default memo(InsightsGridOverview);
