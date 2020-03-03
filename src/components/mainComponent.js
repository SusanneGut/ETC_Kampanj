import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import media from "styled-media-query"

const MainComponent = ({
  className,
  textcolor,
  backgroundcolor,
  img,
  title,
  preamble,
  body,
}) => (
  <div className={className}>
    <StyledBody
      style={{
        color: textcolor.hex,
        backgroundColor: backgroundcolor.hex,
      }}
    >
      {img && <StyledImg fluid={img.fluid} />}
      <StyledText>
        {title && <StyledH1>{title}</StyledH1>}
        {preamble && <div dangerouslySetInnerHTML={{ __html: preamble }} />}
        {body && <div dangerouslySetInnerHTML={{ __html: body }} />}
      </StyledText>
    </StyledBody>
  </div>
)

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  ${media.greaterThan("950px")`
  flex-direction: row-reverse;
  margin: 0;
`}
`
const StyledH1 = styled.h1`
  font-size: 35px;
  ${media.greaterThan("950px")`
padding-top: 10%;
`}
`
const StyledText = styled.div`
  padding: 25px 35px;
  margin: 2%;
  p {
    font-size: 15px;
  }
  ${media.greaterThan("950px")`
margin: 0;
flex: 3;
padding: 0px 55px 47px 55px;
p {
  font-size: 20px;
}
`}
`
const StyledImg = styled(Img)`
  margin: 0;
  min-height: 247px;
  ${media.greaterThan("950px")`
flex: 1 2;
margin: 0;
padding: 0;
`}
`
const StyledMainComponent = styled(MainComponent)`
  border: 0 1px 0 1px solid #e9e9e9;
`
export default StyledMainComponent
