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
    <StyledPuff>
      {listofmobilepuffs.map(puff => (
        <PuffMobileSubscriptionComponent
          puff={puff}
          buttontext={buttontext}
          button={button}
        />
      ))}
    </StyledPuff>
  </div>
)

const StyledTitle = styled.h1`
  font-family: "Stag-semibold";
  font-size: 36px;
  ${media.greaterThan("910px")`
font-size: 56px;
margin:0;
`}
`
const StyledPreamble = styled.p`
  font-family: "StagSans-book";
  font-size: 16px;

  ${media.greaterThan("910px")`
  font-size: 18px;
  padding: 0 20%;

`}
`
const StyledSection = styled.section`
  text-align: center;
`
const StyledPuff = styled.div`
  display: flex;
  flex-direction: column;
  ${media.greaterThan("910px")`
  flex-direction:row;
`}
`

const StyledMobileSubscriptionComponent = styled(MobileSubscriptionComponent)`
  padding: 3% 9%;
`
export default StyledMobileSubscriptionComponent
