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
${media.greaterThan('1023px')`
display: flex;
`}
color: #333333;
background-color: #F3F3F3;
border: 1px solid #E9E9E9;
`
const StyledPuffLarge = styled(PuffLargeContainer)`
${media.greaterThan('1023px')`
flex: 1 2;
max-width: 70%;
margin-top: -5%;
padding: 20px 10px 20px 30px;
`}
padding: 10px;
`
const StyledPuffSmall = styled(PuffSmallContainer)`
${media.greaterThan('1023px')`
flex: 3 4;
max-width: 30%;
margin-top: -5%;
padding: 20px 30px 20px 10px;
`}
padding: 10px;
`