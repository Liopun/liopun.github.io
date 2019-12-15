import styled from 'styled-components'
import { media, getOuterSpace } from '../../style/constants'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 18rem;
  /* padding: 5rem; */
  ${getOuterSpace('padding')}
  ${media.md`
    position: static;
    padding: 0;
  `}

  > div {
    position: relative;
  }

  a, svg {
    display: block;
  }

  a {
    width: 1.65rem;
    ${media.lg`
      width: 1.45rem;
    `}
  }

  svg {
    width: 100%;
    height: auto;
  }

  .resume {
    /* position: absolute; */
    /* top: 50%;*/
    right: 100%;
  }

  a:hover + .circle {
    opacity: 0;
    transform: translate(-50%, -50%) scale(7.5);
    transition: transform 1s cubic-bezier(.45, 0, .1, 1), opacity .8s ease;
  }
`
