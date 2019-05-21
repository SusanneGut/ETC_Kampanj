import React from "react"
import PuffL from "./puffL";
import PuffS from "./puffS";
import styled from "styled-components"


const StyledPuffs = ({className}) => (
    <Styled className={className}>
        <StyedL/>
        <StyedS/>
    </Styled>
)
export default StyledPuffs

const Styled = styled.div`
display: flex;
color: #333333;
background-color: #F3F3F3;
border: 1px solid #E9E9E9;
padding: 10%;
`
const StyedL = styled(PuffL)`
flex: 0 1 2 3 4;
max-width: 70%;
margin-top: -16%;
`
const StyedS = styled(PuffS)`
flex: 5;
max-width: 30%;
margin-top: -16%;
padding-left: 70px;

`