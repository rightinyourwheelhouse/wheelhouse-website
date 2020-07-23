import React, {
  memo, useRef, useState, useCallback, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { animateScroll } from 'react-scroll';

import {
  List,
  ArrowContainer,
  OuterContainer,
} from './horizontalItemList.styles';

import spacing from '~styles/spacing';
import colors from '~styles/colors';

import Chevron from '~images/chevron-left.svg';

const HorizontalItemList = ({
  background,
  children,
  height,
  itemWidth,
  portraitWidth,
  space,
  ...props
}) => {
  const [position, setPosition] = useState(0);
  const list = useRef();

  const lastPos = useMemo(() => {
    const { current } = list;

    if (!current) {
      return 0;
    }

    return current.scrollWidth - current.clientWidth;
  }, [position, list]);

  const scroll = useCallback((pos) => {
    const { current } = list;

    if (!current) {
      return;
    }

    animateScroll.scrollTo(pos, {
      container: current,
      horizontal: true,
    });

    setPosition(pos);
  }, []);

  const onRight = useCallback(() => {
    const { current } = list;

    const newPos = current.scrollLeft + window.innerWidth;

    scroll(newPos);
  }, [list]);

  const onLeft = useCallback(() => {
    const { current } = list;

    const newPos = current.scrollLeft - window.innerWidth;

    scroll(newPos);
  }, [list]);

  const onWheel = useCallback(() => {
    const { current } = list;

    setPosition(current.scrollLeft);
    console.log('current.scrollLeft', current.scrollLeft);
  }, []);

  return (
    <OuterContainer>
      {position > 0 && (
        <ArrowContainer onClick={onLeft} role="button">
          <Chevron />
        </ArrowContainer>
      )}
      <List ref={list} onWheel={onWheel} {...props}>
        {children}
      </List>
      {position < lastPos && (
      <ArrowContainer onClick={onRight} className="right" role="button">
        <Chevron />
      </ArrowContainer>
      )}
    </OuterContainer>
  );
};

HorizontalItemList.propTypes = {
  background: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  height: PropTypes.string,
  itemWidth: PropTypes.string,
  portraitWidth: PropTypes.string,
  space: PropTypes.string,
};

HorizontalItemList.defaultProps = {
  background: colors.backgroundPrimary,
  height: '30vw',
  itemWidth: '45vw',
  portraitWidth: '35vw',
  space: spacing.default,
};

export default memo(HorizontalItemList);
