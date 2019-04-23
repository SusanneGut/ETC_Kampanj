import React from "react"
import "./layout.css"
import {StaticQuery, graphql} from "gatsby"


const Footer = () => (
    <StaticQuery
    query={graphql`
      query {
        datoCmsPage{
          footer
         }
      }
    `}
    render={data =>data.datoCmsPage.footer}
  />
)

export default Footer

