import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
  <Wrapper>
    <Item position='left'>
      Made in {getCurrentYear()}
    </Item>
    <Item position='right'>
      <span>LIOPUN&nbsp;|&nbsp;</span>

      <a target="_blank" rel="noopener noreferrer" href='https://github.com/michelemazzucco/michelemazzucco.it'>+1 (905)922-8568</a>
    </Item>
  </Wrapper>

export default Footer
