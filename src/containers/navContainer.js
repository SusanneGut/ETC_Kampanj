import React from "react"
import NavComponent from "../components/navComponent"
import { StaticQuery, graphql } from "gatsby"

const NavContainer = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsArticle {
          edges {
            node {
              slug
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div className={className}>
          {data.allDatoCmsArticle.edges.map(({ node }) => {
            return <NavComponent slug={node.slug} />
          })}
        </div>
      )
    }}
  />
)
export default NavContainer
