import React from "react"
import styled from "styled-components"
import PuffMobileSubscriptionComponent from "./puffMobileSubscriptionComponent"
import media from "styled-media-query"

const MobileSubscriptionComponent = ({
  className,
  title,
  preamble,
  textcolor,
  backgroundcolor,
  buttontext,
  button,
  listofmobilepuffs,
}) => (
  <div className={className} style={{ backgroundColor: backgroundcolor.hex }}>
    <StyledSection>
      <div>
        {title && (
          <StyledTitle style={{ color: textcolor.hex }}>{title}</StyledTitle>
        )}
      </div>
      <div>
        {preamble && (
          <StyledPreamble
            dangerouslySetInnerHTML={{ __html: preamble }}
            style={{ color: textcolor.hex }}
          />
        )}
      </div>
    </StyledSection>
    {listofmobilepuffs.map(puff => (
      <PuffMobileSubscriptionComponent
        puff={puff}
        buttontext={buttontext}
        button={button}
      />
    ))}
  </div>
)

const StyledTitle = styled.h1`
  font-family: "Stag-semibold";
  ${media.greaterThan("576px")`
font-size: 22px;
`}
`
const StyledPreamble = styled.p`
  font-family: "StagSans-book";
  font-size: 16px;

  ${media.greaterThan("576px")`
`}
`
const StyledSection = styled.section`
  text-align: center;
`

const StyledMobileSubscriptionComponent = styled(MobileSubscriptionComponent)`
  padding: 3% 9%;
`
export default StyledMobileSubscriptionComponent
