import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import Footer from "./footer"
import styled from "styled-components"
import media from "styled-media-query"
import Header from "../components/header"

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
  margin: 0;
  padding: 0;
`

export default Layout
