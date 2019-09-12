import React from "react"
import NavComponent from "../components/navComponent"
import { StaticQuery, graphql } from "gatsby"

const NavContainer = ({ className }) => (
  <StaticQuery
    query={graphql`
      query($slug: String!) {
        datoCmsArticle(slug: { eq: $slug }) {
          slug
          articletitle
        }
      }
    `}
    render={data => {
      return <NavComponent slug={data.datoCmsArticle.slug} />
    }}
  />
)
export default NavContainer
