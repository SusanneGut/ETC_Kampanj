import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsPage{
          logo{
             fluid(maxWidth: 500, imgixParams: {fm: "jpg", auto:"compress" }) {
               ...GatsbyDatoCmsFluid
             }
           }
         }
      }
    `}
    render={data => <Img fluid={data.datoCmsPage.logo.fluid} />}
  />
)
export default Logo
