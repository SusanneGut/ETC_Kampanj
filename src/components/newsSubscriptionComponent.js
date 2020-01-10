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
  headtext,
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
        {headtext && <StyledH4>{headtext}</StyledH4>}
        {title && <StyledTitle>{title}</StyledTitle>}
        {preamble && <StyledP dangerouslySetInnerHTML={{ __html: preamble }} />}
        <NewsletterFormComponent />
      </StyledBackgroundImage>
    ) : (
      <StyledDiv style={{ backgroundColor: backgroundcolor.hex }}>
        {headtext && <StyledH4>{headtext}</StyledH4>}
        {title && <StyledTitle>{title}</StyledTitle>}
        {preamble && <StyledP dangerouslySetInnerHTML={{ __html: preamble }} />}
        <NewsletterFormComponent />
      </StyledDiv>
    )}
  </div>
)

const StyledH4 = styled.h4``

const StyledTitle = styled.h1`
  font-size: 35px;
  min-width: 285px;
  ${media.greaterThan("576px")`
`}
`
const StyledP = styled.p`
  font-size: 15px;
  min-widht: 270px;
  margin-bottom: 30px;
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
