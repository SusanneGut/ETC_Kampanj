import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import media from "styled-media-query"
import ButtonLink from "./buttonLink"
import Link from "gatsby-link"

const FairphoneComponent = ({
  className,
  image,
  imgbackgroundcolor,
  title,
  titlecolor,
  text,
  textcolor,
  bulletlist,
  bulletlistcolor,
  price,
  colorprice,
  button,
  buttontext,
  buttonlink,
  textlink,
  colortextlink,
}) => (
  <div className={className}>
    <StyledImageSection>
      {image && <StyledImage fluid={image.fluid} />}
    </StyledImageSection>
    {title && (
      <StyledTitle style={{ color: titlecolor.hex }}>{title}</StyledTitle>
    )}
    {text && (
      <StyledText
        dangerouslySetInnerHTML={{ __html: text }}
        style={{ color: textcolor.hex }}
      ></StyledText>
    )}
    <StyledHr />
    {bulletlist && (
      <StyledBulletlist
        dangerouslySetInnerHTML={{ __html: bulletlist }}
        style={{ color: bulletlistcolor.hex }}
      ></StyledBulletlist>
    )}
    {price && (
      <StyledPrice style={{ color: colorprice.hex }}>{price}</StyledPrice>
    )}
    {button && (
      <StyledButtonLink
        to={"/" + buttonlink.slug}
        backgroundColor={button.buttonbgcolor.hex}
        textColor={button.buttontextcolor.hex}
        borderColor={button.buttonbordercolor.hex}
      >
        {buttontext}
      </StyledButtonLink>
    )}
    {textlink && (
      <StyledLink
        to={"/" + textlink.articletitle}
        style={{ color: colortextlink }}
      >
        Text missing
      </StyledLink>
    )}
  </div>
)

const StyledImage = styled(Img)`
  max-width: 300px;
`
const StyledImageSection = styled.section``

const StyledTitle = styled.h1`
  font-size: 36px;
  font-family: "Stag-semibold";
  ${media.greaterThan("910px")`
`}
`
const StyledText = styled.div`
font-family: "StagSans-book";
font-size 16px;
`
const StyledHr = styled.hr`
  border-top: 1px solid #dfe4ea;
`
const StyledBulletlist = styled.div`
  font-size: 14px;
  font-family: "StagSans-medium";
  ul {
    list-style: none;
    padding: 0;
  }
  ul li:before {
    content: "✔";
    color: #f58816;
    padding: 0 6px 0 0;
  }
  ${media.greaterThan("425px")`
    font-size: 16px;
`}
`
const StyledPrice = styled.p`
  font-size: 36px;
  font-family: "Stag-semibold";

  ${media.greaterThan("950px")`
  
  
`}
`
const StyledButtonLink = styled(ButtonLink)`
  width: 100%;
  font-family: "StagSans-medium";
  font-size: 18px;
  margin-bottom: 25px;
  ${media.greaterThan("950px")`

`}
`
const StyledLink = styled(Link)`
  font-family: "StagSans-medium";
  font-size: 16px;
  text-decoration: none;
  :link {
    color: #3f1a89;
  }
`
const StyledFairphoneComponent = styled(FairphoneComponent)`
  padding: 4% 9%;
  line-height: 150%;
`

export default StyledFairphoneComponent
