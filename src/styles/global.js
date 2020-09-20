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
  .emoji {
    display: inline-block;
    vertical-align: text-top;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .small {
    font-family: Inconsolata, monospace;
    font-size: 0.85rem;
    display: inline-block;
    margin-top: 15px;
  }
  .small:after {
    display: none;
  }
  #top-button {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    background: 0 0;
    border: none;
    outline: 0;
    width: 40px;
    position: fixed;
    bottom: 25px;
    right: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    #top-button {
      bottom: 20px;
      right: 7px;
      width: 35px;
    }
  }
  @media screen and (max-width: 480px) {
    #top-button {
      bottom: 15px;
      right: 3px;
    }
  }
  #top-button:focus,
  #top-button:hover {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  #top-button img {
    width: 100%;
  }
  .footer {
    padding: 50px 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    .footer {
      padding: 50px;
    }
  }
  @media screen and (max-width: 630px) {
    .footer {
      display: block;
    }
  }
  @media screen and (max-width: 480px) {
    .footer {
      padding: 50px 30px;
    }
  }
  .footer__copyright {
    font-weight: 700;
    width: 200px;
  }
  @media screen and (max-width: 630px) {
    .footer__copyright {
      width: auto;
      text-align: center;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 630px) {
    .footer__copyright .bottom,
    .footer__copyright .top {
      display: inline-block;
    }
  }
  @media screen and (max-width: 480px) {
    .footer__copyright .bottom,
    .footer__copyright .top {
      display: block;
    }
  }
  .footer__copyright .emoji {
    width: 20px;
    height: 20px;
    margin: 0 3px;
    vertical-align: text-bottom;
  }
  @media screen and (max-width: 630px) {
    .footer__links {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
  }
  .footer__links a {
    position: relative;
    display: inline-block;
    color: #007bff !important;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 15px;
    outline: 0;
  }
  @media screen and (max-width: 1024px) {
    .footer__links a {
      margin: 0 10px;
    }
  }
  .footer__links a:after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background: #007bff;
    content: "";
    opacity: 0;
    -webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;
    transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;
    transition: height 0.3s, opacity 0.3s, transform 0.3s;
    transition: height 0.3s, opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  @media screen and (max-width: 850px) {
    .footer__links a:after {
      display: none;
    }
  }
  .footer__links a:focus:after,
  .footer__links a:hover:after {
    height: 2px;
    border-radius: 3px;
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .footer__links a .text {
    font-size: 0.9rem;
    display: inline;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 850px) {
    .footer__links a .text {
      display: none;
    }
  }
  .footer__links img {
    display: none;
    width: 22px;
  }
  @media screen and (max-width: 850px) {
    .footer__links img {
      display: inline-block;
    }
  }
`
