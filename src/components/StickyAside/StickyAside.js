import React, {
  memo, useCallback, useState, useMemo,
} from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Stack from '~components/Stack';
import Info from '~components/Info';

import {
  StickyAsideItemContainer,
  StickyAsideContainer,
  StickyAsideImage,
} from './stickyAside.styles';

const StickyAsideOverview = ({ items, layout, reverse }) => {
  const [firstItemHeight, setfirstItemHeight] = useState(0);

  const StickyAside = useMemo(() => [...items.slice(1, items.length)], [items]);

  const {
    author: firstItemAuthor,
    date: firstItemDate,
    description: firstItemDescription,
    image: firstItemImage,
    readTime: firstItemReadTime,
    title: firstItemTitle,
    url: firstItemUrl,
  } = items[0] || {};

  const refCallback = useCallback((node) => {
    if (node) {
      setfirstItemHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const ContainerElement = useMemo(() => {
    if (layout === 'columns') {
      return React.Fragment;
    }

    return 'div';
  }, [layout]);

  return (
    <StickyAsideContainer stickyHeight={firstItemHeight} reverse={reverse}>
      <ContainerElement>
        {firstItemTitle && (
          <StickyAsideItemContainer>
            <div ref={refCallback}>
              <Stack>
                {firstItemImage && (
                  <Link to={firstItemUrl}>
                    <StickyAsideImage>
                      <Img fluid={firstItemImage.childImageSharp.fluid} />
                    </StickyAsideImage>
                  </Link>
                )}
                <Link to={firstItemUrl}>
                  <h3>{firstItemTitle}</h3>
                </Link>
                <p>{firstItemDescription}</p>

                <Info
                  date={firstItemDate}
                  author={firstItemAuthor}
                  readTime={firstItemReadTime}
                />
              </Stack>
            </div>
          </StickyAsideItemContainer>
        )}
      </ContainerElement>
      <ContainerElement>
        {StickyAside.map(
          ({
            author: itemAuthor,
            date: itemDate,
            description: itemDescription,
            image: itemImage,
            readTime: itemReadTime,
            title: itemTitle,
            url: itemUrl,
          }) => (
            <StickyAsideItemContainer key={itemTitle}>
              <Stack>
                {itemImage && (
                  <Link to={itemUrl}>
                    <StickyAsideImage>
                      <Img fluid={itemImage.childImageSharp.fluid} />
                    </StickyAsideImage>
                  </Link>
                )}
                <Link to={itemUrl}>
                  <h3>{itemTitle}</h3>
                </Link>
                <p>{itemDescription}</p>

                <Info
                  date={itemDate}
                  author={itemAuthor}
                  readTime={itemReadTime}
                />
              </Stack>
            </StickyAsideItemContainer>
          )
        )}
      </ContainerElement>
    </StickyAsideContainer>
  );
};

StickyAsideOverview.propTypes = {
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
  layout: PropTypes.oneOf(['highlight', 'columns']),
  reverse: PropTypes.bool,
};

StickyAsideOverview.defaultProps = {
  items: [],
  layout: 'highlight',
  reverse: false,
};

export default memo(StickyAsideOverview);
