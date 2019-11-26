import React from "react"
import NewsletterFormComponent from "./newsletterFormComponent"
import styled from "styled-components"
import media from "styled-media-query"
import Backgroundimage from "gatsby-background-image"

const NewsSubscriptionComponent = ({
  className,
  textcolor,
  bgimage,
  title,
  preamble,
  backgroundcolor,
}) => (
  <div
    className={className}
    style={{
      color: textcolor.hex,
      textAlign: "center",
      backgroundColor: backgroundcolor.hex,
    }}
  >
    {bgimage ? (
      <StyledBackgroundImage fluid={bgimage.fluid}>
        {title ? <StyledH2>{title}</StyledH2> : ""}
        {preamble ? <p dangerouslySetInnerHTML={{ __html: preamble }} /> : ""}
        <NewsletterFormComponent />
      </StyledBackgroundImage>
    ) : (
      <StyledDiv style={{ backgroundColor: backgroundcolor.hex }}>
        {title ? <StyledH2>{title}</StyledH2> : ""}
        {preamble ? <p dangerouslySetInnerHTML={{ __html: preamble }} /> : ""}
        <NewsletterFormComponent />
      </StyledDiv>
    )}
  </div>
)

const StyledH2 = styled.h3`
  ${media.greaterThan("576px")`
font-size: 22px;
`}
`
const StyledDiv = styled.div`
  padding: 5%;
  ${media.greaterThan("576px")`
padding: 10%;
`}
`
const StyledBackgroundImage = styled(Backgroundimage)`
  padding: 5% 10%;
  ${media.greaterThan("576px")`
padding: 5% 20%;
`}
`
export default NewsSubscriptionComponent
