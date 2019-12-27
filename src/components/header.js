import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }
`

const Header = () => {
  return (
    <header
      css={css`
        background-color: #eee;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify: space-between;
        padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      `}
    >
      <NavLink to="/" activeClassName="current-page" fontWeight="bold">
        {" "}
        Main Link{" "}
      </NavLink>
      <nav
        css={css`
          margin-top: 0;
          width: 100%;
          display: flex;
          justify-content: space-around;
        `}
      >
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/page-2" activeClassName="current-page">
          Page2{" "}
        </NavLink>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
