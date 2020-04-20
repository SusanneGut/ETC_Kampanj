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
        <StyledTextSection>
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
        </StyledTextSection>
        <StyledHr />
        <StyledPriceSection>
          {puff.content &&
            puff.content.map(pricesection => (
              <StyledPriceList style={{ color: puff.textcolorprice.hex }}>
                {pricesection.lineitem}
              </StyledPriceList>
            ))}
          {puff.price && (
            <StyledPrice style={{ color: puff.textcolorprice.hex }}>
              {puff.price} kr/mån
            </StyledPrice>
          )}
        </StyledPriceSection>
        <StyledButtonLink
          to={"/" + "order_mobil"}
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
  max-width: 100%;
  ${media.greaterThan("910px")`
  min-height: 100%;
  margin: 5%;        
`}
`
const StyledMain = styled.div`
  padding: 30px;
  ${media.greaterThan("910px")`
`}
`
const StyledTextSection = styled.section`
  ${media.greaterThan("910px")`
min-height: 190px;
`}
`

const StyledTitle = styled.h2`
  font-family: "Stag-semibold";
  font-size: 22px;
  margin: 0;
  ${media.greaterThan("910px")`
`}
`
const StyledText = styled.span`
  p {
    font-size: 16px;
    font-family: "StagSans-book";
  }
  ${media.greaterThan("910px")`
p {font-size: 18px;
     }
`}
`
const StyledHr = styled.hr`
  border-top: 1px solid #dfe4ea;
`
const StyledPriceSection = styled.section`
  ${media.greaterThan("910px")`
min-height: 250px;
`}
`

const StyledPriceList = styled.div`
  font-family: "StagSans-medium";
  font-size: 16px;
  ${media.greaterThan("910px")`
  font-size: 12px;
  
`}
  ${media.greaterThan("1100px")`
font-size: 16px;
`}
`

const StyledPrice = styled.h1`
  font-family: "Stag-semibold";
  font-size: 36px;
  ${media.greaterThan("910px")`
  font-size: 35px;
  
`}
  ${media.greaterThan("1400px")`
  font-size: 52px;
`}
`
const StyledButtonLink = styled(ButtonLink)`
  width: 100%;
  font-family: "StagSans-medium";
  font-size: 18px;
  margin-bottom: 30px;
  ${media.greaterThan("910px")`

`}
`
const StyledLink = styled(Link)`
  font-family: "StagSans-medium";
  font-size: 16px;
  text-decoration: none;
  :link {
    color: #3f1a89;
  }
`

export default PuffMobileSubscriptionComponent
