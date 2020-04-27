import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

const MobileNewsComponent = ({
  className,
  backgroundcolor,
  title,
  titlecolor,
  text,
  textcolor,
  image,
  imagetext,
  imagetextcolor,
}) => (
  <StyledNewsSection
    className={className}
    style={{ backgroundColor: backgroundcolor.hex }}
  >
    {" "}
    {title && (
      <StyledTitle style={{ color: titlecolor.hex }}>{title}</StyledTitle>
    )}
    {text && (
      <StyledText
        dangerouslySetInnerHTML={{ __html: text }}
        style={{ color: textcolor.hex }}
      ></StyledText>
    )}
    {image && (
      <StyledImageSection>
        <StyledImage fluid={image.fluid} />
        {imagetext && (
          <StyledImageText style={{ color: imagetextcolor.hex }}>
            {imagetext}
          </StyledImageText>
        )}
      </StyledImageSection>
    )}
  </StyledNewsSection>
)

export default MobileNewsComponent

const StyledNewsSection = styled.section`
  padding: 38px 30px;
  line-height: 150%;
  ${media.greaterThan("950px")`
   padding: 30px 10%;
`}
`
const StyledTitle = styled.p`
  font-family: "Stag-semibold";
  font-size: 36px;
  margin: 0;
  line-height: 100%;

  ${media.greaterThan("950px")`
    font-size: 52px;
    text-align: center;
    margin: 8px 0;
    padding: 0 16%;

`}
`
const StyledText = styled.div`
  font-family: "StagSans-book";
  font-size: 16px;
  ${media.greaterThan("950px")`
    font-size:18px;
    padding: 0 20%;
    text-align: center;
`}
`

const StyledImageSection = styled.section``
const StyledImage = styled(Img)``

const StyledImageText = styled.p`
  font-family: "StagSans-book";
  font-size: 14px;
  ${media.greaterThan("950px")`
    font-size:18px;

`}
`
