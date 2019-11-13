import React from "react"
import NavComponent from "../components/navComponent"
import { StaticQuery, graphql } from "gatsby"

const NavContainer = ({}) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsArticle(sort: { fields: [meta___publishedAt], order: DESC }) {
          edges {
            node {
              slug
              articletitle
              ismenuitem
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <NavComponent
          navigationItems={data.allDatoCmsArticle.edges.map(({ node }) => ({
            ismenuitem: node.ismenuitem,
            slug: node.slug,
            title: node.articletitle,
          }))}
        />
      )
    }}
  />
)
export default NavContainer
