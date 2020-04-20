import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import PuffLargeComponent from "./puffLargeComponent"
import PuffSmallComponent from "./puffSmallComponent"
import PuffSingleComponent from "./puffSingleComponent"

const StyledPuffsComponent = ({
  className,
  backgroundcolor,
  buttontext,
  listofpuffs,
  button,
}) => (
  <div className={className}>
    {listofpuffs[1] ? (
      <Styled style={{ backgroundColor: backgroundcolor.hex }}>
        {listofpuffs.map((puff, i) =>
          i === 0 ? (
            <StyledPuffLarge
              puff={puff}
              buttontext={buttontext}
              button={button}
            />
          ) : (
            <StyledPuffSmall
              puff={puff}
              buttontext={buttontext}
              button={button}
            />
          )
        )}
      </Styled>
    ) : (
      <div style={{ backgroundColor: backgroundcolor.hex }}>
        {listofpuffs.map(puff => (
          <StyledPuffSingle
            puff={puff}
            buttontext={buttontext}
            button={button}
          />
        ))}
      </div>
    )}
  </div>
)
export default StyledPuffsComponent

const Styled = styled.div`
  display: flex;
  color: #333333;
  background-color: #f3f3f3;
  //border: 1px solid #e9e9e9;
`
const StyledPuffLarge = styled(PuffLargeComponent)`
  position: relative;
  padding: 10px;
  flex: 0 1 2;
  margin-top: -5%;
  margin-right: 0;
  margin-left: 3%;
  ${media.greaterThan("576px")`
  padding: 20px 10px 20px 30px;
  margin-left: 1%;
`}
  ${media.greaterThan("768px")`

`}
`

const StyledPuffSmall = styled(PuffSmallComponent)`
  padding: 10px;
  flex: 3 4 5;
  margin-top: -5%;
  margin-right: 3%;
  ${media.greaterThan("576px")`
  padding: 20px 30px 20px 10px;
  margin-right: 2%;
`}
`
const StyledPuffSingle = styled(PuffSingleComponent)`
  padding: 0 23px 23px 23px;
  ${media.greaterThan("950px")`
  position: relative;
  `}
`
