import React from "react"
import styled from "styled-components"

const Button = styled.button`

background: ${props => props.transRed || props.transWhite ? "transparent" : "#E3000B"};
color: ${props => props.transRed ? "#E3000B" : "white"};
font-size: 8 px;
padding: 6px;
border-radius: 5px;
border: 1.5px solid #E3000B;
width: 100px;
`;


export default Button