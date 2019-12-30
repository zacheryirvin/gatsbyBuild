/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import Helmet from "react-helmet"

import Header from "./header"
import { useSiteMetaData } from "../hooks/siteMetaData.js"
console.log(useSiteMetaData)

const Layout = ({ children }) => {
  const { title, description } = useSiteMetaData()
  return (
    <>
      <Global
        styles={css`
          box-sizing: border-box;
          margin: 0;
          margin-top: 1rem;
          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, "Segoeo UI", Roboto;
            font-size: 18px;
            line-height: 1.4;

            div {
              margin-top: 0;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
