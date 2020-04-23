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
  <StyledSection
    className={className}
    style={{
      color: textcolor.hex,
      backgroundColor: backgroundcolor.hex,
    }}
  >
    {bgimage ? (
      <StyledBackgroundImage fluid={bgimage.fluid}>
        {headtext && <StyledHeadText>{headtext}</StyledHeadText>}
        {title && <StyledTitle>{title}</StyledTitle>}
        {preamble && (
          <StyledPreamble dangerouslySetInnerHTML={{ __html: preamble }} />
        )}
        <StyledNewsletterFormComponent />
      </StyledBackgroundImage>
    ) : (
      <StyledDiv style={{ backgroundColor: backgroundcolor.hex }}>
        {headtext && <StyledHeadText>{headtext}</StyledHeadText>}
        {title && <StyledTitle>{title}</StyledTitle>}
        {preamble && (
          <StyledPreamble dangerouslySetInnerHTML={{ __html: preamble }} />
        )}
        <StyledNewsletterFormComponent />
      </StyledDiv>
    )}
  </StyledSection>
)

const StyledSection = styled.section`
  text-align: center;
`

const StyledBackgroundImage = styled(Backgroundimage)`
  padding: 5% 10%;
  ${media.greaterThan("576px")`
padding: 5% 20%;
`}
`
const StyledDiv = styled.div`
  padding: 30px;
`
const StyledHeadText = styled.h4``

const StyledTitle = styled.p`
  font-size: 36px;
  font-family: "Stag-semibold";
  margin: 23px 0;

  ${media.greaterThan("790px")`
  font-size: 52px;
`}
`
const StyledPreamble = styled.p`
  font-size: 16px;
  ${media.greaterThan("790px")`
  font-size: 18px;
  padding:0 20%;
`}
`

const StyledNewsletterFormComponent = styled(NewsletterFormComponent)``

export default NewsSubscriptionComponent
