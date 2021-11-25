import Img from 'gatsby-image';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React, { memo, useCallback, useState, useMemo } from 'react';

import gridLayouts from './CareerInsightsGrid.layouts';
import {
  CareerInsightsGridItemContainer,
  CareerInsightsGridContainer,
  CareerInsightsGridImage,
  Type,
} from './CareerInsightsGrid.styles';

import AuthorInfo from '~components/AuthorInfo';

import { toShortDate } from '~utils/date';

function CareerInsightsGrid({ items, layout, reverse }) {
  const [firstItemHeight, setfirstItemHeight] = useState(0);

  const CareerInsightsGrid = useMemo(
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

  const refCallback = useCallback(node => {
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
    <CareerInsightsGridContainer
      stickyHeight={firstItemHeight}
      layout={layout}
      reverse={reverse}
    >
      <ContainerElement>
        {firstItemTitle && (
          <CareerInsightsGridItemContainer>
            <div ref={refCallback}>
              {firstItemImage && (
                <Link to={firstItemUrl}>
                  <CareerInsightsGridImage>
                    <Img fluid={firstItemImage.childImageSharp.fluid} />
                  </CareerInsightsGridImage>
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
          </CareerInsightsGridItemContainer>
        )}
      </ContainerElement>
      <ContainerElement>
        {CareerInsightsGrid.map(
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
            <CareerInsightsGridItemContainer key={itemTitle}>
              {itemImage && (
                <Link to={itemUrl}>
                  <CareerInsightsGridImage>
                    <Img fluid={itemImage.childImageSharp.fluid} />
                  </CareerInsightsGridImage>
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
            </CareerInsightsGridItemContainer>
          ),
        )}
      </ContainerElement>
    </CareerInsightsGridContainer>
  );
}

CareerInsightsGrid.propTypes = {
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

CareerInsightsGrid.defaultProps = {
  items: [],
  layout: gridLayouts.HIGHLIGHT,
  reverse: false,
};

export default memo(CareerInsightsGrid);
