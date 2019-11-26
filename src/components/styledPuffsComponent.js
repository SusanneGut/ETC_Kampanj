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
}) => (
  <div className={className}>
    {listofpuffs[1] ? (
      <Styled style={{ backgroundColor: backgroundcolor.hex }}>
        {listofpuffs.map((puff, i) =>
          i === 0 ? (
            <StyledPuffLarge puff={puff} buttontext={buttontext} />
          ) : (
            <StyledPuffSmall puff={puff} buttontext={buttontext} />
          )
        )}
      </Styled>
    ) : (
      <div style={{ backgroundColor: backgroundcolor.hex }}>
        {listofpuffs.map(puff => (
          <StyledPuffSingle puff={puff} buttontext={buttontext} />
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
  width: 50%;
  flex: 0 1 2;
  margin-top: -5%;
  margin-right: 0;
  margin-left: 5%;
  ${media.greaterThan("576px")`
width: 70%;
padding: 20px 10px 20px 30px;
`}
${media.greaterThan("768px")`

`}
}
`
const StyledPuffSmall = styled(PuffSmallComponent)`
  padding: 10px;
  widht: 50%;
  flex: 3 4 5;
  margin-top: -5%;
  margin-right: 5%;
  ${media.greaterThan("576px")`
width: 30%;
padding: 20px 30px 20px 10px;
`}
  ${media.greaterThan("768px")`
  `}
`
const StyledPuffSingle = styled(PuffSingleComponent)`
  width: 80%;
  margin-top: -5%;
  padding: 0 5% 5% 10%;
`
