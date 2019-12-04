import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import Footer from "./footer"
import styled from "styled-components"
import media from "styled-media-query"

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
          <main>{children}</main>
          <Footer />
        </StyledDiv>
      </>
    )}
  />
)

const StyledDiv = styled.div`
  margin-left: 0;
  margin-right: 0;
  ${media.greaterThan("992px")`
 margin-left: 15%;
 margin-right: 15%;
`}
`

export default Layout
