import React from "react"
import Img from "gatsby-image"
import Backgroundimage from "gatsby-background-image"
import styled from "styled-components"
import media from "styled-media-query"
import ButtonLink from "./buttonLink"
import Link from "../components/link"
const TopComponent = ({
  className,
  preamble,
  title,
  textcolor,
  backgroundcolor,
  backgroundimage,
  buttonlink,
  buttontext,
  button,
  pretitle,
  pretitleColor,
}) => (
  <div className={className}>
    <div style={{ position: "relative", color: textcolor.hex }}>
      {backgroundimage ? (
        <Backgroundimage
          fluid={backgroundimage.fluid}
          style={{ padding: "5px" }}
        >
          {pretitle && (
            <StyledPreTitle style={{ color: pretitleColor.hex }}>
              {pretitle}
            </StyledPreTitle>
          )}
          {title && <StyledTitle>{title}</StyledTitle>}
          {preamble && (
            <StyledPreamble dangerouslySetInnerHTML={{ __html: preamble }} />
          )}
          {buttontext && (
            <StyledButtonLink
              to={"/" + buttonlink.slug}
              backgroundColor={button.buttonbgcolor.hex}
              textColor={button.buttontextcolor.hex}
              borderColor={button.buttonbordercolor.hex}
            >
              {buttontext}
            </StyledButtonLink>
          )}
        </Backgroundimage>
      ) : (
        <div style={{ backgroundColor: backgroundcolor.hex }}>
          {pretitle && (
            <StyledPreTitle style={{ color: pretitleColor.hex }}>
              {pretitle}
            </StyledPreTitle>
          )}
          {title && <StyledTitle>{title}</StyledTitle>}
          {preamble && (
            <StyledPreamble dangerouslySetInnerHTML={{ __html: preamble }} />
          )}
          {buttontext && (
            <StyledButtonLink
              to={"/" + buttonlink.slug}
              backgroundColor={button.buttonbgcolor.hex}
              textColor={button.buttontextcolor.hex}
              borderColor={button.buttonbordercolor.hex}
            >
              {buttontext}
            </StyledButtonLink>
          )}
        </div>
      )}
    </div>
  </div>
)

const StyledPreTitle = styled.h6`
  padding: 52px 0 0 30px;
  margin: 0;
`

const StyledTitle = styled.h1`
  padding: 18px 62px 0 30px;
  font-size: 44px;
  margin: 0;

  ${media.greaterThan("576px")`
 font-size: 60px;
 padding: 0px 50% 0% 10%;`}
  ${media.greaterThan("950px")`
 font-size: 95px;
 padding: 0px 50% 0% 10%;
`}
`
const StyledPreamble = styled.section`
  padding: 0 46px 0 23px;
  font-size: 17px;

  ${media.greaterThan("576px")`
 font-size: 20px;
 padding: 0px 50% 0% 10%;
`}
`
const StyledTopComponent = styled(TopComponent)`
  height: 100%;
  ${media.greaterThan("576px")`
`}
`
const StyledButtonLink = styled(ButtonLink)`
  margin: 38px 0% 50px 23px;

  ${media.greaterThan("576px")`
margin: 0% 0% 8% 10%;

`}
`

export default StyledTopComponent
