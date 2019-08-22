import React from "react"
import styled from "styled-components"

const Button = styled.button`

background: ${props => props.transparentRed || props.transparentWhite || props.transparentGrey  ? "transparent" : "#E3000B"};
color: ${props => props.transparentRed ? "#E3000B" : "white"};
color: ${props => props.transparentGrey ? "#686868" : "white"};
font-size: ${props => props.small ? "8px" : "10px"};
padding: ${props => props.small ? "0" : "6px"};
border-radius: 5px;
border: ${props => props.transparentGrey ? "1.5px solid #BDBDBD" : "1.5px solid #E3000B"};
width: ${props => props.small ? "50px" : "100px"};

`;


export default Button