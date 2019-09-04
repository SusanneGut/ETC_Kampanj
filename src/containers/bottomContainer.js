import React from "react"
import BottomComponent from "../components/bottomComponent"
import { StaticQuery, graphql } from "gatsby"

const BottomContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsPage {
          content {
            ... on DatoCmsBottom {
              logo {
                fluid(
                  maxWidth: 500
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsFluid
                }
              }
              contact
            }
          }
        }
      }
    `}
    render={data => {
      return <BottomComponent bottomItems={data.datoCmsPage.content} />
    }}
  />
)
export default BottomContainer
