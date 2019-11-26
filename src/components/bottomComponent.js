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
          <div style={{ marginBottom: "1.45rem", maxWidth: "40px" }}>
            <Img fluid={logo.fluid} />
          </div>
        )}
      </div>
      <StyledText>
        {contact && <p dangerouslySetInnerHTML={{ __html: contact }} />}
      </StyledText>
      <StyledHr />
    </StyledDiv>
  </div>
)

const StyledHr = styled.hr`
  margin-right: -10%;
`

const StyledText = styled.div`
  p {
    font-size: 10px;
  }
`
const StyledDiv = styled.div`
  padding: 2% 20% 5% 10%;
`

export default BottomComponent
