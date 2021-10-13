import PropTypes from 'prop-types';
import React, { memo, useRef, useState, useCallback, useMemo } from 'react';
import { animateScroll } from 'react-scroll';

import {
  List,
  ArrowContainer,
  OuterContainer,
} from './horizontalItemList.styles';

import Chevron from '~images/chevron-left.svg';
import colors from '~styles/colors';
import spacing from '~styles/spacing';

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
      return typeof window !== 'undefined' ? window.innerWidth : 0;
    }

    return current.scrollWidth - current.clientWidth;
  }, [list]);

  const scroll = useCallback(pos => {
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
  }, [scroll]);

  const onLeft = useCallback(() => {
    const { current } = list;

    const newPos = current.scrollLeft - window.innerWidth;

    scroll(newPos);
  }, [scroll]);

  const onWheel = useCallback(() => {
    const { current } = list;

    setPosition(current.scrollLeft);
  }, []);

  return (
    <OuterContainer>
      {position > 0 && (
        <ArrowContainer onClick={onLeft} role="button">
          <Chevron />
        </ArrowContainer>
      )}
      <List
        background={background}
        space={space}
        ref={list}
        onWheel={onWheel}
        {...props}
      >
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
  background: colors.backgroundPrimary900,
  height: '30vw',
  itemWidth: '45vw',
  portraitWidth: '35vw',
  space: spacing.default,
};

export default memo(HorizontalItemList);
