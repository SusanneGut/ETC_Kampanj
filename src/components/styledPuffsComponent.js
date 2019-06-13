import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import PuffSmallContainer from "../containers/puffSmallContainer";
import PuffLargeContainer from "../containers/puffLargeContainer";

const StyledPuffsComponent = ({className}) => (
    <Styled className={className}>
        <StyledPuffLarge/>
        <StyledPuffSmall/>
    </Styled>
)
export default StyledPuffsComponent

const Styled = styled.div`
display: flex;
color: #333333;
background-color: #F3F3F3;
border: 1px solid #E9E9E9;
${media.lessThan('415x')`
`}
${media.greaterThan('1023')`
`}
`
const StyledPuffLarge = styled(PuffLargeContainer)`
padding: 10px;
width: 50%;
flex: 0 1 2;
${media.greaterThan('1023px')`
max-width: 70%;
margin-top: -5%;
padding: 20px 10px 20px 30px;
`}
${media.lessThan('415px')`
max-width: 50%;
widht: 50%;
padding: 5% 2.5% 5% 7%
margin-top: -8%;
`}
`
const StyledPuffSmall = styled(PuffSmallContainer)`
padding: 10px;
widht: 50%;
flex: 3 4 5;
${media.greaterThan('1023px')`
max-width: 30%;
margin-top: -5%;
padding: 20px 30px 20px 10px;
`}
${media.lessThan('415px')`
max-width: 50%;
width: 50%;
padding: 5% 0% 5% 2.5%;
margin-top:-8%;

`}
`