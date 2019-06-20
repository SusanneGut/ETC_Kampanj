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
`
const StyledPuffLarge = styled(PuffLargeContainer)`
padding: 10px;
width: 50%;
flex: 0 1 2;
${media.greaterThan('600px')`
width: 70%;
margin-top: -5%;
padding: 20px 10px 20px 30px;
`}
${media.lessThan('601px')`
max-width: 50%;
widht: 50%;
padding: 5% 1% 5% 8%
margin-top: -8%;
`}
`
const StyledPuffSmall = styled(PuffSmallContainer)`
padding: 10px;
widht: 50%;
flex: 3 4 5;
${media.greaterThan('600px')`
width: 30%;
margin-top: -5%;
padding: 20px 30px 20px 10px;
`}
${media.lessThan('601px')`
max-width: 50%;
width: 50%;
padding: 5% 0% 5% 1%;
margin-top:-8%;
`}
`