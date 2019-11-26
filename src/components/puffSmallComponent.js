import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Button from "./button"
import media from "styled-media-query"
import Link from "gatsby-link"

const PuffSmallComponent = ({ className, puff: item, buttontext }) => (
  <div className={className}>
    <StyledArticle>
      {item.img && (
        <StyledImg fluid={item.img.fluid}>
          <StyledText>
            {item.articletitle && <StyledH3>{item.articletitle}</StyledH3>}
            {item.preamble && (
              <p dangerouslySetInnerHTML={{ __html: item.preamble }} />
            )}
            <Link to={item.slug}>
              <StyledButton>{buttontext}</StyledButton>
            </Link>
          </StyledText>
        </StyledImg>
      )}
    </StyledArticle>
  </div>
)

const StyledArticle = styled.div`
  ${media.lessThan("576px")`
  height: 150px;
  width: 150px;
  `}
  border-radius: 8px;
  height: 200px;

  ${media.greaterThan("768px")`
  
`}
`
const StyledText = styled.section`
  ${media.lessThan("768px")`
  p {
    display: none;
  }
`}
  color: #33333;
  padding: 20% 10% 0 10%;
  margin: 0;
  p {
    widht: 100px;
    height: 10ch;
    font-size: 12px;
    color: "585858";
    padding-bottom: 2%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
  }
  ${media.greaterThan("786px")`

  `}
`
const StyledH3 = styled.h3`
  margin: 0;
  ${media.greaterThan("576px")`
  margin-bottom: 25%;
  `}
  ${media.greaterThan("768px")`
margin-bottom: 2%;
`}
`
const StyledImg = styled(BackgroundImage)`
  margin: 0;
  padding: 0;
  border-radius: 8px;
  height: 150px;
  ${media.greaterThan("576px")`
  height: 200px;
  width: 150px;
  max-width: 400px;
`}
  ${media.greaterThan("768px")`
  height: 250px;
  max-widht: 250px;
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
export default PuffSmallComponent
