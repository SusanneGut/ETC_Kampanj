import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Button from "./button"
import media from "styled-media-query"
import Link from "gatsby-link"

const PuffSmallComponent = ({
  className,
  img,
  articletitle,
  preamble,
  slug,
}) => (
  <div className={className}>
    <StyledArticle>
      {img ? (
        <StyledImg fluid={img.fluid}>
          <StyledText>
            {articletitle ? <StyledH3>{articletitle}</StyledH3> : ""}
            {preamble ? (
              <p dangerouslySetInnerHTML={{ __html: preamble }} />
            ) : (
              ""
            )}
            <Link to={slug}>
              <StyledButton>Läs mer</StyledButton>
            </Link>
          </StyledText>
        </StyledImg>
      ) : (
        ""
      )}
    </StyledArticle>
  </div>
)

const StyledArticle = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  ${media.greaterThan("576px")`
height: 250px;
max-width: 400px;
`}
  ${media.lessThan("601px")`
max-height: 130px;
max-width: 130px;
`}
`
const StyledText = styled.section`
  color: #33333;
  padding: 20% 10% 0 10%;
  margin: 0;
  p {
    font-size: 12px;
    color: "585858";
    padding-bottom: 2%;
  }
  ${media.greaterThan("576px")`
p{margin-bottom: 0;}
`}
  ${media.lessThan("601px")`
padding: 1% 5% 0 5%;
p{
    display: none;
}
`}
`
const StyledH3 = styled.h3`
  ${media.lessThan("601px")`
margin-bottom: 2%;
`}
`
const StyledImg = styled(BackgroundImage)`
  margin: 0;
  padding: 0;
  border-radius: 8px;
  ${media.greaterThan("576px")`
max-width: 400px;
height: 250px;
`}
  ${media.lessThan("601px")`
height: 130px;
width: 130px;
`}
`
const StyledButton = styled(Button)`
  ${media.lessThan("601px")`
padding: 0;
font-size: 10px;
margin: 0%;
width: 50px;
`}
`
export default PuffSmallComponent
