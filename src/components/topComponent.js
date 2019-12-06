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
  logo,
  buttonlink,
  buttontext,
  button,
}) => (
  <div className={className}>
    <div style={{ position: "relative", color: textcolor.hex }}>
      {backgroundimage ? (
        <Backgroundimage
          fluid={backgroundimage.fluid}
          style={{ padding: "5px" }}
        >
          {logo && (
            <div style={{ marginBottom: "1.45rem", maxWidth: "50px" }}>
              <Link to={"/"}>
                <Img fluid={logo.fluid} />
              </Link>
            </div>
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
          {logo && (
            <div style={{ marginBottom: "1.45rem", maxWidth: "50px" }}>
              <Img fluid={logo.fluid} />{" "}
            </div>
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

const StyledTitle = styled.h1`
  padding: 50px 15% 0% 10%;
  ${media.greaterThan("576px")`
 font-size: 60px;
 padding: 0px 50% 0% 10%;
`}
`
const StyledPreamble = styled.section`
  padding: 0px 15% 0% 10%;
  font-size: 14px;

  ${media.greaterThan("576px")`
 font-size: 20px;
 padding: 0px 50% 0% 10%;
`}
`
const StyledTopComponent = styled(TopComponent)`
  ${media.greaterThan("576px")`
`}
`
const StyledButtonLink = styled(ButtonLink)`
  margin: 0% 0% 10% 10%;

  ${media.greaterThan("576px")`
margin: 0% 0% 8% 10%;

`}
`

export default StyledTopComponent
