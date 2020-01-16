import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import Backgroundimage from "gatsby-background-image"
import Link from "../components/link"
import { graphql } from "gatsby"
import OrderFormComponent1 from "../components/orderFormComponent1"
import OrderFormComponent2 from "../components/orderFormComponent2"
import { white } from "color-name"

export default ({ data, className }) => {
  const image = data.datoCmsOrder.image
  const logo = data.datoCmsOrder.logo
  const backgroundcolor = data.datoCmsOrder.backgroundcolor.hex

  //ordersection
  const sectionimage = data.datoCmsOrder.sectionimg
  const sectiontoptext = data.datoCmsOrder.sectiontoptext
  const sectiontoptextcolor = data.datoCmsOrder.sectiontoptextcolor.hex
  const sectiontopcolor = data.datoCmsOrder.sectiontopcolor.hex
  const sectiontitle = data.datoCmsOrder.sectiontitle
  const sectiontext = data.datoCmsOrder.sectiontext

  return (
    <Layout className={className}>
      <StyledOrder style={{ backgroundColor: backgroundcolor }}>
        {image && (
          <Backgroundimage fluid={image.fluid} style={{ height: "225px" }}>
            {logo && (
              <StyledLogo style={{ maxWidth: "86px" }}>
                <Link to={"/"}>
                  <Img fluid={logo.fluid} />
                </Link>
              </StyledLogo>
            )}{" "}
          </Backgroundimage>
        )}
        <StyledSection>
          {" "}
          <StyledSubhead
            style={{
              color: sectiontoptextcolor,
              backgroundColor: sectiontopcolor,
            }}
          >
            {sectiontoptext}
          </StyledSubhead>
          {sectionimage && (
            <StyledImage
              fluid={sectionimage.fluid}
              style={{ height: "270px" }}
            ></StyledImage>
          )}
          <StyledH2>{sectiontitle}</StyledH2>
          <StyledP>{sectiontext}</StyledP>
          <OrderFormComponent1
            id="form"
            content={data.datoCmsOrder.content}
            button={data.datoCmsOrder.buttonstyle}
            buttontext={data.datoCmsOrder.buttontext}
          ></OrderFormComponent1>
        </StyledSection>
        <StyledSection>
          <StyledSubhead style={{ color: "white", backgroundColor: "#85A475" }}>
            Kundinformation
          </StyledSubhead>
          <OrderFormComponent2></OrderFormComponent2>
        </StyledSection>
      </StyledOrder>
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
      backgroundcolor {
        hex
      }
      sectiontoptext
      sectiontopcolor {
        hex
      }
      sectiontoptextcolor {
        hex
      }
      sectionimg {
        fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      sectiontitle
      sectiontext
      content {
        ... on DatoCmsAlternativetitle {
          title
        }
        ... on DatoCmsAlternative {
          text
          textcolor {
            hex
          }
          price
          checkbox
        }
      }
      buttonstyle {
        ... on DatoCmsButton {
          buttonbgcolor {
            hex
          }
          buttontextcolor {
            hex
          }
          buttonbordercolor {
            hex
          }
        }
      }
      buttontext
    }
  }
`
const StyledOrder = styled.div`
  overflow: scroll;
`
const StyledLogo = styled.div`
  margin-left: 45px;
`

const StyledSubhead = styled.h3`
  padding: 14px 0 14px 22px;
  border-radius: 5px 5px 0 0;
`
const StyledSection = styled.section`
  background-color: #ffffff;
  margin: 22px;
  border-radius: 5px;
`
const StyledImage = styled(Img)`
  margin: 0 0 45px 22px;
`
const StyledH2 = styled.h2`
  font-size: 28px;
  margin: 0 0 0 22px;
  padding: ;
`
const StyledP = styled.p`
  font-size: 15px;
  padding: 7px 22px 0 22px;
`
