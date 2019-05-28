
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import Footer from "./footer";
import Header from "./header";
import NavComponent from "../components/navComponent";


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
      <div style={{marginLeft: "15%", marginRight:"15%"}}>
        <Header/>
        <div>
        <NavComponent/>
          <main>{children}</main>
          <Footer/>
        </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
