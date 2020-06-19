import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

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

import colors from '../../styles/colors';

const NavBar = ({ baseColor, items }) => {
  const [open, setOpen] = useState(false);
  const [{ isScrolled }] = useScrolling(500);

  const toggleMenu = useCallback(() => {
    setOpen((isOpen) => !isOpen);
  }, []);

  return (
    <Nav>
      <Items
        className={open && 'active'}
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
          <ItemsContent>
            {items.map(({ href, title }) => (
              <Item key={title} baseColor={baseColor} scrolled={isScrolled}>
                <Link to={href}>{title}</Link>
              </Item>
            ))}
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
  baseColor: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

NavBar.defaultProps = {
  baseColor: colors.textPrimary,
  items: [],
};

export default memo(NavBar);
