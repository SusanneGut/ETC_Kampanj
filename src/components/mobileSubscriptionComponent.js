import React from "react"
import styled from "styled-components"
import PuffMobileSubscriptionComponent from "./puffMobileSubscriptionComponent"
import media from "styled-media-query"

const MobileSubscriptionComponent = ({
  className,
  title,
  preamble,
  backgroundcolor,
  buttontext,
  button,
  listofmobilepuffs,
}) => (
  <div className={className} style={{ backgroundColor: backgroundcolor.hex }}>
    <div>{title && <StyledTitle>{title}</StyledTitle>}</div>
    <div>
      {preamble && (
        <StyledPreamble dangerouslySetInnerHTML={{ __html: preamble }} />
      )}
    </div>
    {listofmobilepuffs.map(puff => (
      <PuffMobileSubscriptionComponent
        puff={puff}
        buttontext={buttontext}
        button={button}
      />
    ))}
  </div>
)

const StyledTitle = styled.h3`
  margin-bottom: 0;
  margin-left: 2%;
  ${media.greaterThan("576px")`
font-size: 22px;
`}
`
const StyledPreamble = styled.h5`
  margin-top: 0;
  margin-left: 2%;
  ${media.greaterThan("576px")`
font-size: 16px;
`}
`
const StyledMobileSubscriptionComponent = styled(MobileSubscriptionComponent)`
  color: #333333;
  background-color: #bdbdbd;
  padding: 3% 5%;
  height: 600px;
`
export default StyledMobileSubscriptionComponent
