import React from 'react'
import Link from 'gatsby-link'
import CLogo from './c.svg'
import { Wrapper } from './style'

const Logo = () =>
  <Wrapper>
    <div className="logo">
      <Link to='/'><CLogo width={25} height={25} /></Link>
      <div className="circle" />
    </div>
  </Wrapper>

export default Logo
