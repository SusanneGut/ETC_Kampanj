import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import media from "styled-media-query"
import ButtonLink from "./buttonLink"

const MainComponent = ({
  className,
  textcolor,
  backgroundcolor,
  img,
  title,
  preamble,
  body,
  button,
  buttonlink,
  buttontext,
}) => (
  <div className={className}>
    <StyledBody
      style={{
        color: textcolor.hex,
        backgroundColor: backgroundcolor.hex,
      }}
    >
      <StyledSection>
        {img && <StyledImg fluid={img.fluid} />}
        <StyledIntro>
          {title && <StyledH1>{title}</StyledH1>}
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
          )}{" "}
        </StyledIntro>
      </StyledSection>
      <StyledHr />
      {body && <StyledText dangerouslySetInnerHTML={{ __html: body }} />}
    </StyledBody>
  </div>
)

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  ${media.greaterThan("1100px")`
padding: 30px 10% 30px 10%;
`};
`

const StyledSection = styled.section`
  ${media.greaterThan("950px")`
  display: flex;
  flex-direction: row-reverse;
  
`};
`

const StyledImg = styled(Img)`
  margin: 30px;
  ${media.greaterThan("950px")`
  min-height:380px;
  min-width:475px;
  flex: 1 2;
`}
`
const StyledIntro = styled.div`
  margin: 0 30px 30px 30px;
  ${media.greaterThan("950px")`
  padding-right:0;
  flex: 3;
  `}
`

const StyledH1 = styled.h1`
  font-size: 36px;
  font-family: "Stag-semibold";

  ${media.greaterThan("950px")`
  padding-top:0%;

`}
`
const StyledPreamble = styled.div`
  font-family: "StagSans-book";
  font-size: 16px;
  line-height: 150%;
`

const StyledButtonLink = styled(ButtonLink)`
  font-family: "StagSans-medium";
  ${media.greaterThan("950px")`
  margin-top: 35%;

`}
`
const StyledHr = styled.hr`
  margin: 0 30px;
`

const StyledText = styled.div`
  margin: 0 30px 30px 30px;
  line-height: 150%;
  .head {
    font-size: 20px;
    color: #48af5d;
    font-family: "StagSans-semibold";
    margin-bottom: 0px;
  }
  .body {
    font-family: "StagSans-book";
    font-size: 16px;
  }
  ${media.greaterThan("950px")`
  .section{
    display: flex;
    flex-direction: row;
  }
  .block{
    width: 40%;
    margin-right:30px;
  }
 
  .head {
    font-size: 22px;
    color: #48af5d;
    font-family: "StagSans-semibold";
    margin-bottom: 0px;
  }
  .body {
    font-family: "StagSans-book";
    font-size: 18px;
  }
  }
`}
`

const StyledMainComponent = styled(MainComponent)`
  border: 0 1px 0 1px solid #e9e9e9;
`
export default StyledMainComponent
