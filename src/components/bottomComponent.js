import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const BottomComponent = ({ className, bottomItems }) => (
  <div className={className}>
    {bottomItems.map(item => {
      return (
        <div>
          {item.__typename === "DatoCmsBottom" ? (
            <StyledDiv style={{ backgroundColor: item.bgcolor.hex }}>
              <div>
                {item.logo ? (
                  <div style={{ marginBottom: "1.45rem", maxWidth: "40px" }}>
                    <Img fluid={item.logo.fluid} />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <StyledText>
                {item.contact ? (
                  <p dangerouslySetInnerHTML={{ __html: item.contact }} />
                ) : (
                  ""
                )}
              </StyledText>{" "}
              <StyledHr />
            </StyledDiv>
          ) : (
            ""
          )}
        </div>
      )
    })}
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
  color: white;
`

export default BottomComponent
