import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './constants'
import ArrowImg from "../assets/images/arrow.png"

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: stack-mono;
    src: local(".SFNSText-Light");
  }

  @font-face {
    font-family: stack-sans;
    src: local(".SFNSText-Light");
  }

  html, body {
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
    ${media.xl`
      font-size: 14px;
    `}
  }

  html, body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${fonts.sansSerif};
    backface-visibility: hidden;
  }

  body.night, html.night {
    background-color: ${colors.gray171};
    color: ${colors.text171};
  }

  body.night ::-moz-selection,
  html.night ::-moz-selection {
    color: ${colors.night363};
    background: ${colors.yellow900};
  }

  body.night ::selection,
  html.night ::selection {
    color: ${colors.night363};
    background: ${colors.yellow900};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    line-height: inherit;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ease-in .2s;
    
    &:hover {
      
    }
  }

  * {
    box-sizing: border-box;
    line-height: 1.4em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
  }

  ::-moz-selection {
    background: ${colors.yellow900};
  }
  ::selection {
    background: ${colors.yellow900};
  }

  .arrow-link {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    font-weight: 700;
    display: inline-block;
    background-color: transparent;
    white-space: nowrap;
  }
  
  .arrow-link:after {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    position: relative;
    bottom: 2px;
    margin-left: 15px;
    content: "";
    background-image: url(${ArrowImg});
    background-size: 100%;
    width: 15px;
    height: 15px;
    display: inline-block;
    vertical-align: middle;
  }
  .arrow-link:hover:after {
    -webkit-transform: translateX(7px);
    transform: translateX(7px);
  }
`;
