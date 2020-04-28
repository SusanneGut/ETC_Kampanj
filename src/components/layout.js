import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import styled from "styled-components"

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
          <title>{data.site.siteMetadata.title}</title>
          <main>{children}</main>
        </StyledDiv>
      </>
    )}
  />
)

const StyledDiv = styled.div`
  margin: 0;
  padding: 0;
`

export default Layout
