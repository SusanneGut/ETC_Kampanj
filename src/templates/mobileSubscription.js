import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "../components/button"
import Link from "gatsby-link"
import MobilesubscriptionFormComponent1 from "../components/mobileSubscriptionFormComponent.1"
import media from "styled-media-query"

export default ({ data, className }) => {
  const y = 50
  const z = 70

  const title = data.datoCmsMobilesubscription.title
  const price = data.datoCmsMobilesubscription.price
  const body = data.datoCmsMobilesubscription.body
  const image = data.datoCmsMobilesubscription.img
  const subtitle = data.datoCmsMobilesubscription.subtitle
  const content = data.datoCmsMobilesubscription.content
  const textline = data.datoCmsMobilesubscription.default
  const numbers = [parseInt(price), y, z]
  const add = (a, b) => a + b
  return (
    <StyledArticle className={className}>
      <StyledText>
        {title && <StyledH3>{title}</StyledH3>}
        <StyledTopHr />
        {body && <StyledP dangerouslySetInnerHTML={{ __html: body }} />}
      </StyledText>
      <br />
      {image && <StyledImg fluid={image.fluid} />}
      {subtitle && <StyledH4>{subtitle}</StyledH4>}
      {content.map(item => {
        return (
          <StyledPriceSection>
            <StyledHr />
            <StyledP1>{item.lineitem}</StyledP1>
            {item.itemprice && <StyledP2>{item.itemprice} kr</StyledP2>}
            <br />
          </StyledPriceSection>
        )
      })}
      <br />
      {textline && <StyledA href="/Anvandaravtal">{textline}</StyledA>}
      <br />
      <StyledDiv>
        <StyledSubHead>Sammanfattning</StyledSubHead>
        <StyledSection>
          <StyledP1>Mobilabonnemang {title}</StyledP1>
          <StyledP2>{price} kr/mån</StyledP2>
          <br />
          <StyledHr />
          <StyledP1>Lorem Ipsum</StyledP1>
          <StyledP2>{y} kr/mån</StyledP2>
          <br />
          <StyledHr />
          <StyledP1>Lorem Ipsum</StyledP1>
          <StyledP2>{z} kr/mån</StyledP2>
          <br />
          <StyledHr />
          <br />
          <StyledTotal>
            <StyledP1>Total:</StyledP1>
            <StyledP2>{numbers.reduce(add)} kr/mån</StyledP2>
          </StyledTotal>{" "}
          <br />
          <Link to="/ETC_lagom">
            <Button1 style={{ color: "#E3000B" }} transparentRed>
              Avbryt
            </Button1>
          </Link>
          <Link to="">
            <Button2>Gå vidare</Button2>
          </Link>
        </StyledSection>
      </StyledDiv>
      <br />
      <Form id="form" title={title} numbers={numbers} />
    </StyledArticle>
  )
}

export const query = graphql`
  query($slug: String!) {
    datoCmsMobilesubscription(slug: { eq: $slug }) {
      title
      body
      img {
        fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      subtitle
      default
      price
      content {
        ... on DatoCmsPricedetail {
          lineitem
          itemprice
        }
      }
    }
  }
`
const StyledPriceSection = styled.section`
  margin: 0;
  ${media.greaterThan("576px")`
  
  `}
`
const StyledTopHr = styled.hr`
  width: 30%;
  margin-left: 0;
  background-color: #e3000b;
  height: 8px;
  border-style: none;
  margin: 0;
`

const StyledP1 = styled.p`
  float: left;
  margin: 0;
  font-size: 12px;
  ${media.greaterThan("576px")`

  `}
`
const StyledP2 = styled.p`
  float: right;
  margin: 0;
  font-size: 12px;
  ${media.greaterThan("576px")`
  font-size: 14px;

  `}
`
const StyledA = styled.a`
  font-size: 12px;
`
const StyledH3 = styled.h3`
  font-size: 25px;
`
const StyledH4 = styled.h4`
  font-size: 18px;
  margin-top: 2px;
  margin-bottom: 4px;
`
const StyledArticle = styled.div`
  color: #333333;
  background-color: #f3f3f3;
  border: 1px solid #e9e9e9;
  padding: 10% 10% 10% 10%;
`
const StyledText = styled.div`
  color: #33333;
  padding-left: 8px;
  flex: 0 1;
  margin: 0;
  max-width: 80%;
`
const StyledImg = styled(Img)`
  flex: 2 3;
  margin: 0;
  max-width: 20%;
  max-height: 150px;
  padding: 0;
`
const StyledHr = styled.hr`
  color: #e3000b;
`
const StyledDiv = styled.div`
  background-color: white;
  width: 100%;
  margin-top: 5%;
  border-color: #eaeaea;
  border-style: solid;
`
const StyledSubHead = styled.h4`
  color: #686868;
  margin: 0;
  background-color: #f2f2f2;
  padding: 3%;
`
const StyledSection = styled.section`
  background-color: white;
  padding: 3%;
  margin-bottom: 10%;
`
const StyledP = styled.p`
  font-size: 14px;
`
const StyledTotal = styled.section`
  margin-bottom: 3%;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`
const Button1 = styled(Button)`
  float: left;
`
const Button2 = styled(Button)`
  float: right;
`
const Form = styled(MobilesubscriptionFormComponent1)``
