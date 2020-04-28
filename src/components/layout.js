import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import styled from "styled-components"
import { Helmet } from "react-helmet"
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
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>{" "}
        </Helmet>
        <StyledDiv>
          <main>{children}</main>
        </StyledDiv>{" "}
      </>
    )}
  />
)

const StyledDiv = styled.div`
  margin: 0;
  padding: 0;
`

export default Layout
