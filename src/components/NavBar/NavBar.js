import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import classnames from 'classnames';

import {
  Nav,
  Items,
  MenuIcon,
  ItemsContainer,
  Item,
  ItemsContent,
} from './navBar.styles';

import colors from '~styles/colors';

import Logo from '~images/favicon.svg';

const NavBar = ({
  background,
  baseColor,
  baseHoverColor,
  hamburgerColor,
  items,
  logoInitiallyHidden,
}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen((isOpen) => !isOpen);
  }, []);

  return (
    <Nav background={background}>
      <Items className={open && 'active'} background={background}>
        <ItemsContainer className={open && 'active'}>
          <MenuIcon
            hamburgerColor={hamburgerColor}
            type="MenuIcon"
            onClick={toggleMenu}
            className={open && 'active'}
          >
            <span className="menu-icon__line menu-icon__line-left" />
            <span className="menu-icon__line" />
            <span className="menu-icon__line menu-icon__line-right" />
          </MenuIcon>
          <Item
            className={classnames({
              logo: true,
              logoInitiallyHidden,
            })}
          >
            <Link to="/">
              <Logo />
            </Link>
          </Item>
          <ItemsContent active={open} baseColor={baseColor} baseHoverColor={baseHoverColor}>
            <Item className="visible-small">
              <Link to="/">Home</Link>
            </Item>
            {items.map(({ href, title }) => (
              <Item key={title}>
                <Link to={href}>{title}</Link>
              </Item>
            ))}
          </ItemsContent>
        </ItemsContainer>
      </Items>
    </Nav>
  );
};

NavBar.propTypes = {
  background: PropTypes.string,
  baseColor: PropTypes.string,
  baseHoverColor: PropTypes.string,
  hamburgerColor: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  logoInitiallyHidden: PropTypes.bool,
};

NavBar.defaultProps = {
  background: colors.backgroundSecundary,
  baseColor: colors.textLight,
  baseHoverColor: colors.primary,
  hamburgerColor: colors.textPrimary,
  items: [],
  logoInitiallyHidden: false,
};

export default memo(NavBar);
