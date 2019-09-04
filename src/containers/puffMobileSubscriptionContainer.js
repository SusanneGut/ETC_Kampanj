import React from "react"
import PuffMobileSubscriptionComponent from "../components/puffMobileSubscriptionComponent"
import { StaticQuery, graphql } from "gatsby"

const PuffMobileSubscriptionContainer = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsMobilesubscription {
          edges {
            node {
              title
              preamble
              img {
                fluid(
                  maxWidth: 100
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsFluid
                }
              }
              price
              slug
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div className={className}>
          {data.allDatoCmsMobilesubscription.edges.map(({ node }) => {
            return (
              <PuffMobileSubscriptionComponent
                title={node.title}
                preamble={node.preamble}
                img={node.img}
                price={node.price}
                slug={node.slug}
              />
            )
          })}
        </div>
      )
    }}
  />
)
export default PuffMobileSubscriptionContainer
