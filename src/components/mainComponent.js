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
  ${media.greaterThan("576px")`
flex-direction: row;
max-width: 100%;
margin: 0;
max-height: 300px;
`}
`
const StyledH1 = styled.h1`
  ${media.greaterThan("576px")`
padding-top: 10%;
`}
`
const StyledText = styled.div`
  padding: 25px 35px;
  margin: 2%;
  p {
    font-size: 15px;
  }
  ${media.greaterThan("576px")`
margin: 0;
flex: 0 1 2 3 ;
max-width: 40%;
padding: 0px 25px;
`}
`
const StyledImg = styled(Img)`
  margin: 0;
  height: 247px;
  ${media.greaterThan("576px")`
flex: 4;
margin: 0;
padding: 0;
max-width: 60%;
height: 360px;
`}
`
const StyledMainComponent = styled(MainComponent)`
  border: 0 1px 0 1px solid #e9e9e9;
  ${media.greaterThan("576px")`
  height: 360px;
`}
`
export default StyledMainComponent
