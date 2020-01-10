import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const BottomComponent = ({ className, bgcolor, textcolor, logo, contact }) => (
  <div className={className}>
    <StyledDiv
      style={{
        backgroundColor: bgcolor.hex,
        color: textcolor.hex,
      }}
    >
      <div>
        {logo && (
          <StyledLogo>
            <Img fluid={logo.fluid} />
          </StyledLogo>
        )}
      </div>
      <StyledText>
        {contact && <p dangerouslySetInnerHTML={{ __html: contact }} />}
      </StyledText>
      <StyledHr style={{ color: textcolor.hex }} />
    </StyledDiv>
  </div>
)

const StyledHr = styled.hr`
  margin-right: -15%;
`

const StyledText = styled.div`
  p {
    font-size: 14px;
  }
`
const StyledDiv = styled.div`
  padding: 2% 20% 5% 10%;
`
const StyledLogo = styled.div`
  margin-bottom: 14px;
  max-width: 50px;
`

export default BottomComponent
