import React, { memo, useState, useCallback } from 'react';
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

import colors from '../../styles/colors';

import Github from '../../images/github.svg';
import Wheelhouse from '../../images/wheelhouse.svg';

const NavBar = ({ baseColor, items, logoInitiallyHidden }) => {
  const [open, setOpen] = useState(false);
  const [{ isScrolled }] = useScrolling(50);

  const toggleMenu = useCallback(() => {
    setOpen((isOpen) => !isOpen);
  }, []);

  return (
    <Nav>
      <Items className={open && 'active'} scrolled={isScrolled}>
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
          <ItemsContent scrolled={isScrolled} baseColor={baseColor}>
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
          <ItemsContent scrolled={isScrolled} baseColor={baseColor}>
            <Item className="visible-small">
              <Link to="/">Home</Link>
            </Item>
            {items.map(({ href, title }) => (
              <Item key={title}>
                <Link to={href}>{title}</Link>
              </Item>
            ))}
            <Item>
              <a
                href="https://github.com/rightinyourwheelhouse/wheelhouse-website"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>Github</span>
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
  baseColor: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  logoInitiallyHidden: PropTypes.bool,
};

NavBar.defaultProps = {
  baseColor: colors.textPrimary,
  items: [],
  logoInitiallyHidden: false,
};

export default memo(NavBar);
