import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import ButtonLink from "./buttonLink"
import media from "styled-media-query"
import Link from "gatsby-link"

const PuffMobileSubscriptionComponent = ({
  className,
  puff,
  buttontext,
  button,
}) => (
  <StyledPuff className={className}>
    <StyledDiv>
      <StyledMain>
        {puff.title && (
          <StyledTitle style={{ color: puff.textcolortitle.hex }}>
            {puff.title}
          </StyledTitle>
        )}
        {puff.preamble && (
          <StyledText
            style={{ color: puff.textcolorpreamble.hex }}
            dangerouslySetInnerHTML={{ __html: puff.preamble }}
          />
        )}
        <StyledHr />
        {puff.content &&
          puff.content.map(pricesection => (
            <StyledPriceSection style={{ color: puff.textcolorprice.hex }}>
              {pricesection.lineitem}
            </StyledPriceSection>
          ))}
        {puff.price && (
          <StyledPrice style={{ color: puff.textcolorprice.hex }}>
            {puff.price} kr/mån
          </StyledPrice>
        )}
        <StyledButtonLink
          to={"/" + puff.slug}
          backgroundColor={button.buttonbgcolor.hex}
          textColor={button.buttontextcolor.hex}
          borderColor={button.buttonbordercolor.hex}
        >
          {buttontext}
        </StyledButtonLink>{" "}
        <StyledLink to={"/" + puff.textline.slug}>
          {puff.textline.articletitle}
        </StyledLink>
      </StyledMain>
    </StyledDiv>
  </StyledPuff>
)

const StyledPuff = styled.div`
  width: 100%;
  line-height: 150%;
  padding-bottom: 9%;
`
const StyledDiv = styled.section`
  margin: 2%;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  ${media.greaterThan("576px")`
max-width: 29%;
float: left;
flex-direction: column;
margin: 2%;
height: 400px;
`}
`
const StyledMain = styled.div`
  padding: 30px;
  flex: 0 1 2 3;
  ${media.greaterThan("576px")`
`}
`
const StyledTitle = styled.h2`
  font-family: "Stag-semibold";
  font-size: 22px;
  margin: 0;
  ${media.greaterThan("576px")`
font-size: 15px;
`}
`
const StyledText = styled.span`
  p {
    font-size: 16px;
    font-family: "StagSans-book";
  }
  ${media.greaterThan("576px")`
p {font-size: 20px;
     }
`}
`
const StyledHr = styled.hr`
  height: 1px;
  color: #dfe4ea;
`

const StyledPriceSection = styled.section`
  font-family: "StagSans-medium";
  font-size: 16px;
`

const StyledPrice = styled.h1`
  font-family: "Stag-semibold";
  font-size: 36px;
  ${media.greaterThan("576px")`
`}
`
const StyledButtonLink = styled(ButtonLink)`
  width: 100%;
  font-family: "StagSans-medium";
  font-size: 18px;
  margin-bottom: 30px;
  ${media.greaterThan("576px")`
padding: 6px;
font-size: 10px;
`}
`
const StyledLink = styled(Link)`
  font-family: "StagSans-medium";
  font-size: 16px;
  text-decoration: none;
`

export default PuffMobileSubscriptionComponent
