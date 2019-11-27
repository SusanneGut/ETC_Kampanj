import React from "react"
import Link from "./link"
import styled from "styled-components"

const ButtonLink = styled(props => <Link {...props} />)`
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  border: 1.5px solid ${props => props.borderColor};
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-size: ${props => (props.small ? "8px" : "10px")};
  padding: ${props => (props.small ? "0" : "6px")};
  border-radius: 5px;
  width: ${props => (props.small ? "50px" : "100px")};
`
export default ButtonLink
