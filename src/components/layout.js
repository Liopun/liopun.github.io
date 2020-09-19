/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { UseDarkMode } from "./useDarkMode"
import { GlobalStyle } from "../styles/global"
import { LightTheme, DarkTheme } from "./themes"
import "../styles/layout.css"
import PointingUp from "../assets/images/emojis/pointing-up.png"
import Switch from "./switch"

const Layout = ({ children }) => {
  const [theme, themeToggler] = UseDarkMode()

  const themeMode = theme === 'light' ? LightTheme : DarkTheme
    
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  function scrollToTop () {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
    
    // renders nothing, since nothing is needed
    return null;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <Switch theme={theme} toggleTheme={themeToggler} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()},
            {` `}
            <a href="https://github.com/Liopun/liopun.github.io">Captone Habiyaremye.</a>
          </footer>
          <button id="top-button">
            <img onClick={() => {scrollToTop()}} src={PointingUp} alt="scroll up" />
          </button>
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
