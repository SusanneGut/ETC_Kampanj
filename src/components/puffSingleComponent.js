import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import media from "styled-media-query"
import ButtonLink from "./buttonLink"

const PuffSingleComponent = ({ className, puff: item, button, buttontext }) => (
  <div className={className}>
    <StyledArticle style={{ backgroundColor: item.bgcolor.hex }}>
      {item.img && <StyledImg fluid={item.img.fluid} />}
      <StyledTextBig>
        {item.articletitle && <StyledH1>{item.articletitle}</StyledH1>}
        {item.preamble && (
          <div dangerouslySetInnerHTML={{ __html: item.preamble }} />
        )}
        <StyledButtonLink
          to={"/" + item.slug}
          backgroundColor={button.buttonbgcolor.hex}
          textColor={button.buttontextcolor.hex}
          borderColor={button.buttonbordercolor.hex}
        >
          {buttontext}
        </StyledButtonLink>
      </StyledTextBig>
    </StyledArticle>
  </div>
)

const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  ${media.greaterThan("576px")`
  widht: 250px;
  `}
  ${media.greaterThan("950px")`
  flex-direction: row-reverse;
  margin: 0 55px 55px 55px;
  

  `}
`
const StyledH1 = styled.h1`
  font-size: 35px;
  margin-bottom: 2%;
  ${media.greaterThan("576px")`
  margin-bottom: 0;
`}
  ${media.greaterThan("950px")`
  margin-bottom: 0;
  font-size: 48px;
  padding-left: 50px;
`}
`
const StyledImg = styled(Img)`
  height: 268px;
  flex: 3 4 5;
  margin: 0;
  padding: 0;
  border-radius: 5px 5px 0px 0px;
  ${media.greaterThan("950px")`
  flex: 1 2;
  height: 550px;
  border-radius: 0px 5px 5px 0px;
  max-width: 700px;  
  `}
`
const StyledTextBig = styled.section`
  flex: 0 1 2;
  color: #33333;
  padding: 22px;
  p {
    font-size: 15px;
    color: "585858";
    padding-bottom: 2%;
  }
  ${media.greaterThan("950px")`
  max-height: 500px;
  flex: 3;
  div{
  }
  p {
    font-size: 20px;
    padding-left: 50px;
  }
  
  `}
`
const StyledButtonLink = styled(ButtonLink)`
  margin-bottom: 5%;
  ${media.greaterThan("950px")`
  margin-left: 60px;
`}
`
export default PuffSingleComponent
