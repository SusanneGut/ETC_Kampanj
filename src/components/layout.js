import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import Footer from "./footer"
import Header from "./header"
import styled from "styled-components"
import media from "styled-media-query"
import NavComponent from "./NavComponent"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <StyledDiv>
        <NavComponent/>
          <Header />
          <div>
            <main>{children}</main>
            <Footer />
          </div>
        </StyledDiv>
      </>
    )}
  />
)

const StyledDiv = styled.div`
  ${media.greaterThan("600px")`
 margin-left: 15%;
 margin-right: 15%;
`}
  margin-left: 0;
  margin-right: 0;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
