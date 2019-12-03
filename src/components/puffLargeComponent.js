import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "./button"
import media from "styled-media-query"
import Link from "gatsby-link"
import BackgroundImage from "gatsby-background-image"

const PuffLargeComponent = ({ className, puff: item, buttontext }) => (
  <div className={className}>
    <StyledArticle style={{ backgroundColor: item.bgcolor.hex }}>
      <StyledBackgroundImage fluid={item.img.fluid}>
        <StyledText>
          {item.articletitle && <StyledH3>{item.articletitle}</StyledH3>}
          {item.preamble && (
            <p dangerouslySetInnerHTML={{ __html: item.preamble }} />
          )}
          <Link to={item.slug}>
            <StyledButton>{buttontext}</StyledButton>
          </Link>
        </StyledText>
      </StyledBackgroundImage>
      <StyledTextBig>
        {item.articletitle && <StyledH3>{item.articletitle}</StyledH3>}
        {item.preamble && (
          <p dangerouslySetInnerHTML={{ __html: item.preamble }} />
        )}
        <Link to={item.slug}>
          <StyledButton>{buttontext}</StyledButton>
        </Link>
      </StyledTextBig>
      {item.img && <StyledImg fluid={item.img.fluid} />}
    </StyledArticle>
  </div>
)

const StyledArticle = styled.div`
  ${media.lessThan("576px")`
  height: 150px;
  width: 150px;
`}
  border-radius: 8px;
  widht: 250px;
  display: flex;
  flex-direction: row;
  height: 200px;
  ${media.greaterThan("768px")`
  max-width: 550px;
  backgound-color: green;
  height: 250px;
  `}
`
const StyledText = styled.section`
  color: #33333;
  padding: 1% 5% 0 5%;
  margin: 0;
  p {
    display: none;
  }
  ${media.greaterThan("576px")`
  flex: 0 1 2 3;
    width: 80%;
`}
  ${media.greaterThan("768px")`
p{
  font-size: 12px;
  color: "585858";
  padding-bottom: 9%;
`}
`
const StyledH3 = styled.h3`
  margin-bottom: 0;
  margin-top: 20%;
  ${media.greaterThan("576px")`
  margin-top: 5%;
  `}
  ${media.greaterThan("768px")`
margin-bottom: 2%;`}
`
const StyledImg = styled(Img)`
  ${media.lessThan("576px")`
display: none;
`}
  height: 200px;
  flex: 3 4;
  margin: 0;
  padding: 0;
  border-radius: 0px 8px 8px 0px;

  ${media.greaterThan("768px")`
  height: 250px;
  flex: 4;
  margin: 0;
  padding: 0;
  border-radius: 0px 8px 8px 0px;
`}
`
const StyledBackgroundImage = styled(BackgroundImage)`
  margin: 0;
  padding: 0;
  border-radius: 8px;
  height: 150px;
  width: 150px;
  ${media.greaterThan("576px")`
  display:none;
  `}
`
const StyledTextBig = styled.section`
  border-radius: 8px 0px 0px 8px;
  ${media.lessThan("576px")`
    display: none;
    `}
  flex: 0 1 2;
  color: #33333;
  padding: 1% 5% 0 5%;
  width: 60%;
  p {
    font-size: 12px;
    color: "585858";
    padding-bottom: 2%;
  }
  ${media.greaterThan("768px")`
  flex: 0 1 2 3;
  color: #33333;
  padding: 1% 5% 0 5%;
  width: 60%;
  p {
    font-size: 12px;
    color: "585858";
    padding-bottom: 7%;
  }
  `}
`
const StyledButton = styled(Button)`
  ${media.lessThan("576px")`
padding: 0;
font-size: 10px;
margin: 0;
width: 50px;
`}
`
export default PuffLargeComponent
