import React from "react"
import styled from "styled-components"

const Button = styled.button`

background: ${props => props.transparentRed || props.transparentWhite || props.transparentGrey  ? "transparent" : "#E3000B"};
color: ${props => props.transparentRed ? "#E3000B" : "white"};
color: ${props => props.transparentGrey ? "#686868" : "white"};
font-size: 8 px;
padding: 6px;
border-radius: 5px;
border: ${props => props.transparentGrey ? "1.5px solid #BDBDBD" : "1.5px solid #E3000B"};
width: 100px;

`;


export default Button