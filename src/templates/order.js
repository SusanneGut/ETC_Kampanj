import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import Backgroundimage from "gatsby-background-image"
import Link from "../components/link"
import { graphql } from "gatsby"
import OrderFormComponent from "../components/orderFormComponent.js"
import Button from "../components/button"
import media from "styled-media-query"

export default ({ data, className }) => {
  const image = data.datoCmsOrder.image
  const logo = data.datoCmsOrder.logo
  const backgroundcolor = data.datoCmsOrder.backgroundcolor.hex

  //ordersection1
  const sectionimage = data.datoCmsOrder.sectionimg
  const sectiontoptext = data.datoCmsOrder.sectiontoptext
  const sectiontoptextcolor = data.datoCmsOrder.sectiontoptextcolor.hex
  const sectiontopcolor = data.datoCmsOrder.sectiontopcolor.hex
  const sectiontitle = data.datoCmsOrder.sectiontitle
  const sectiontext = data.datoCmsOrder.sectiontext

  //section villkor
  const villkortext = data.datoCmsOrder.villkortext
  const villkortextcolor = data.datoCmsOrder.villkortextcolor
  const villkorbutton = data.datoCmsOrder.villkorbutton
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
        )}{" "}
        <StyledSubhead
          style={{
            color: sectiontoptextcolor,
            backgroundColor: sectiontopcolor,
          }}
        >
          {sectiontoptext}
        </StyledSubhead>
        <StyledSection1>
          {" "}
          {sectionimage && (
            <StyledImage fluid={sectionimage.fluid}></StyledImage>
          )}
          <StyledOrderSection>
            <StyledH2>{sectiontitle}</StyledH2>
            <StyledP>{sectiontext}</StyledP>
            <StyledOrderForm
              plans={[{ id: "1", title: "Ett testabbonemang", price: 299 }]}
              phones={[{ id: "1", title: "En testtelefon", price: 5549 }]}
              redirectToAfterSubmit="/form-submitted/"
              linkTerms="/terms-and-conditions/"
              linkRecycling="/phone-recycling/"
            />
          </StyledOrderSection>
        </StyledSection1>
        <StyledSubhead style={{ color: "white", backgroundColor: "#85A475" }}>
          Kundinformation
        </StyledSubhead>
        <StyledSection2></StyledSection2>
        <StyledHr />
        <StyledVillkor>
          <StyledLabel>
            <input type="checkbox"></input>
            <StyledSpan
              style={{ color: villkortextcolor.hex }}
              dangerouslySetInnerHTML={{ __html: villkortext }}
            ></StyledSpan>
          </StyledLabel>
          <StyledButton
            to={"/"}
            style={{
              backgroundColor: villkorbutton.buttonbgcolor.hex,
              borderColor: villkorbutton.buttonbordercolor.hex,
              color: villkorbutton.buttontextcolor.hex,
            }}
          >
            Slutför köpet
          </StyledButton>
        </StyledVillkor>
        <StyledHr />
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
      villkortext
      villkortextcolor {
        hex
      }
      villkorbutton {
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
  margin: 22px 22px 0 22px;
  ${media.greaterThan("950px")`
  margin: 44px 44px 0 44px;
  `}
`
const StyledSection1 = styled.section`
  background-color: #ffffff;
  margin: 0 22px 22px 22px;
  padding-top: 22px;
  border-radius: 5px;
  ${media.greaterThan("950px")`
 display: flex;
 flex-direction: row;
 margin: 0 44px 44px 44px;
  `}
`
const StyledSection2 = styled.section`
  background-color: #ffffff;
  margin: 22px;
  margin-top: 0;
  padding-top: 22px;
  border-radius: 5px;
  ${media.greaterThan("950px")`
  margin: 0 44px 44px 44px;
  `}
`
const StyledSection3 = styled.section``

const StyledImage = styled(Img)`
  margin: 0 0 45px 22px;

  ${media.greaterThan("950px")`
  flex: 1;
  margin: 50px 0 22px 50px;
   height: 498px; 
  `};
`
const StyledOrderForm = styled(OrderFormComponent)``

const StyledOrderSection = styled.section`
  ${media.greaterThan("950px")`
flex: 2;
padding: 22
`}
`

const StyledH2 = styled.h2`
  font-size: 28px;
  margin: 0 0 0 22px;
`
const StyledP = styled.p`
  font-size: 15px;
  padding: 7px 22px 0 22px;
  strong {
    color: #666666;
  }
`
const StyledVillkor = styled.section`
  margin-left: 22px;
  margin-bottom: 22px;
  ${media.greaterThan("950px")`
  display: flex
  `}
`
const StyledHr = styled.hr`
  margin: 9px 22px;
  color: #bababa;
`
const StyledButton = styled(Button)`
  float: left;
  ${media.greaterThan("580px")`
  float: right;
  margin-right:5%;
  margin-bottom: 20%;
  `}
`
const StyledLabel = styled.label``
const StyledSpan = styled.span`
  p {
    display: inline;

    a {
      color: #666666;
      padding-left: 22px;
      padding: 0;
    }
  }
`
