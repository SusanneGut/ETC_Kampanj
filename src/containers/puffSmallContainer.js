import React from "react"
import PuffSmallComponent from "../components/puffSmallComponent"
import { StaticQuery, graphql } from "gatsby"

const PuffSmallContainer = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsArticle(
          filter: { ispuff: { eq: "true" } }
          sort: { fields: [meta___publishedAt], order: DESC }
          limit: 1
          skip: 1
        ) {
          edges {
            node {
              ispuff
              slug
              articletitle
              preamble
              img {
                fluid(
                  maxWidth: 100
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsFluid
                }
              }
              content {
                ... on DatoCmsImg {
                  img {
                    fluid(
                      maxWidth: 100
                      imgixParams: { fm: "jpg", auto: "compress" }
                    ) {
                      ...GatsbyDatoCmsFluid
                    }
                  }
                }
                ... on DatoCmsText {
                  body
                }
                ... on DatoCmsVideo {
                  video {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div className={className}>
          {data.allDatoCmsArticle.edges.map(({ node }) => {
            return (
              <PuffSmallComponent
                img={node.img}
                articletitle={node.articletitle}
                preamble={node.preamble}
                slug={node.slug}
              />
            )
          })}
        </div>
      )
    }}
  />
)
export default PuffSmallContainer
