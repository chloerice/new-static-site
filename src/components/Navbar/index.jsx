import React from 'react'
import Link from 'gatsby-link'
import {Menu, Image} from 'semantic-ui-react'

import github from '../../img/github-icon.svg'
import logo from '../../img/logo-with-text.svg'

import './Navbar.scss' 

function Navbar({context}) {
  return (
    <nav>
      <Menu color="yellow" inverted borderless context={context}>
        <Menu.Item>
          <Link to="/">
            <Image
              className="Navbar-brand"
              verticalAlign="bottom"
              src={logo}
              alt="We Build Black"
            />
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/about">
              About
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/products">
              Products
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </nav>
  )
}

export default Navbar;
