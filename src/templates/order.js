import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import Backgroundimage from "gatsby-background-image"
import Link from "../components/link"
import { graphql } from "gatsby"

export default ({ data, className }) => {
  const image = data.datoCmsOrder.image
  const logo = data.datoCmsOrder.logo

  return (
    <Layout className={className}>
      <StyledDiv>
        <div style={{ position: "relative" }}>
          {image && (
            <Backgroundimage
              fluid={image.fluid}
              style={{ padding: "5px", height: "225px" }}
            >
              {logo && (
                <div style={{ marginBottom: "1.45rem", maxWidth: "50px" }}>
                  <Link to={"/"}>
                    <Img fluid={logo.fluid} />
                  </Link>
                </div>
              )}{" "}
            </Backgroundimage>
          )}
        </div>
      </StyledDiv>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    datoCmsOrder(slug: { eq: $slug }) {
      slug
      logo {
        fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      title
      image {
        fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
const StyledDiv = styled.div`
  color: #333333;
  background-color: #f5f1e1;
  border: 1px solid #e9e9e9;
  padding: 1% 0% 10% 0%;
`
