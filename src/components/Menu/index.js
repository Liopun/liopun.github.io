import React from 'react'
import Email from '../Email'
import { Wrapper, Nav, NavItem, NavLink } from './style'

const Menu = () =>
  <Wrapper>
    <Nav>
      <NavItem>
        <a href="https://github.com/hcaptone" rel="noopener noreferrer" target="_blank">Github</a>
      </NavItem>
      <NavItem>
        <a href="https://www.instagram.com/hcaptone" rel="noopener noreferrer" target="_blank">Instagram</a>
      </NavItem>
      <NavItem>
        <a href="https://twitter.com/hcaptone" rel="noopener noreferrer" target="_blank">Twitter</a>
      </NavItem>
    </Nav>
    <Nav>
      <NavItem>
        <NavLink to='/'>Index</NavLink>
      </NavItem>
      <NavItem>
        <a href="https://www.linkedin.com/in/hcaptone/" rel="noopener noreferrer" target="_blank">Linkedin</a>
      </NavItem>
      <NavItem highlight><Email text="Contact"/>
    </NavItem>
    </Nav>
  </Wrapper>

export default Menu
