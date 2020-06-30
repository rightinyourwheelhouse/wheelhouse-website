import React, {
  memo, useState, useCallback, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import classnames from 'classnames';

import { useScrolling } from '../../hooks/useScrolling';

import {
  Address,
  Nav,
  Items,
  MenuIcon,
  ItemsContainer,
  Item,
  ItemsContent,
} from './navBar.styles';

import Badge from '../Badge';

import { useMedia } from '../../hooks/useMedia';

import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';

import Github from '../../images/github.svg';
import Wheelhouse from '../../images/wheelhouse.svg';

const NavBar = ({
  baseColor,
  baseBackgroundColor,
  careerCount,
  items,
  logoInitiallyHidden,
}) => {
  const [open, setOpen] = useState(false);
  const [{ isScrolled }] = useScrolling(100);

  const toggleMenu = useCallback(() => {
    setOpen((isOpen) => !isOpen);
  }, []);

  const desktop = useMedia(
    [`(min-width: ${breakpoints.medium})`],
    [true],
    false
  );

  const foreground = useMemo(() => {
    if (!desktop) {
      return colors.textPrimary;
    }

    return isScrolled ? colors.textPrimary : baseColor;
  }, [colors, isScrolled, desktop, baseColor]);

  const background = useMemo(() => {
    if (!desktop) {
      return 'none';
    }

    return isScrolled ? colors.textLight : 'transparent';
  }, [colors, isScrolled, desktop, baseColor]);

  const hoverColor = useMemo(() => {
    if (!desktop) {
      return colors.primary;
    }

    return isScrolled ? colors.primary : colors.textPrimary;
  }, [colors, isScrolled, desktop, baseColor]);

  return (
    <Nav>
      <Items
        className={open && 'active'}
        background={background}
        scrolled={isScrolled}
      >
        <MenuIcon
          type="MenuIcon"
          onClick={toggleMenu}
          className={open && 'active'}
        >
          <span className="menu-icon__line menu-icon__line-left" />
          <span className="menu-icon__line" />
          <span className="menu-icon__line menu-icon__line-right" />
        </MenuIcon>
        <ItemsContainer className={open && 'active'}>
          <ItemsContent
            scrolled={isScrolled}
            foreground={foreground}
            baseColor={baseColor}
            hoverColor={hoverColor}
          >
            <Item
              className={classnames({
                logoInitiallyHidden,
                'wh-logo': true,
              })}
            >
              <Link to="/">
                <Wheelhouse />
              </Link>
            </Item>
          </ItemsContent>
          <ItemsContent
            baseBackgroundColor={baseBackgroundColor}
            scrolled={isScrolled}
            foreground={foreground}
            hoverColor={hoverColor}
          >
            <Item className="visible-small">
              <Link to="/">Home</Link>
            </Item>
            {items.map(({ href, title }) => (
              <Item key={title}>
                <Link to={href}>{title}</Link>
              </Item>
            ))}
            <Item>
              <Link to="/careers">
                {careerCount > 0 && <Badge>{careerCount}</Badge>}
                Careers
              </Link>
            </Item>
            <Item>
              <a
                href="https://github.com/rightinyourwheelhouse/wheelhouse-website"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="label">Github</span>
                <Github />
              </a>
            </Item>
          </ItemsContent>
          <Address>
            <div>
              Gaston Geenslaan 11 B4
              {' '}
              <br />
              3001 Leuven
            </div>
            <div>
              <a href="tel:+32479559012">+32 479 559012</a>
            </div>
          </Address>
        </ItemsContainer>
      </Items>
    </Nav>
  );
};

NavBar.propTypes = {
  baseBackgroundColor: PropTypes.string,
  baseColor: PropTypes.string,
  careerCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  logoInitiallyHidden: PropTypes.bool,
};

NavBar.defaultProps = {
  baseBackgroundColor: colors.backgroundPrimary,
  baseColor: colors.textPrimary,
  careerCount: 0,
  items: [],
  logoInitiallyHidden: false,
};

export default memo(NavBar);
