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
            <StyledLogo
              style={{
                marginBottom: "1.45rem",
                maxWidth: "86px",
              }}
            >
              <Link to={"/"}>
                <Img fluid={logo.fluid} />
              </Link>
            </StyledLogo>
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
const StyledLogo = styled.div`
  margin-left: 45px;
`

const StyledTitle = styled.h1`
  padding: 253px 46px 0 23px;
  font-size: 40px;
  margin-top: 0;
  ${media.greaterThan("576px")`
 font-size: 60px;
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
  ${media.greaterThan("576px")`
`}
`
const StyledButtonLink = styled(ButtonLink)`
  margin: 10px 0% 50px 23px;

  ${media.greaterThan("576px")`
margin: 0% 0% 8% 10%;

`}
`

export default StyledTopComponent
