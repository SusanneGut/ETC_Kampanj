import React from "react"
import Link from "./link"
import styled from "styled-components"

const ButtonLink = styled(props => <Link {...props} />)`
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  border: 2px solid ${props => props.borderColor};
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-size: ${props => (props.small ? "8px" : "15px")};
  padding: ${props => (props.small ? "0" : "11px 20px")};
  border-radius: 6px;
  min-width: ${props => (props.small ? "50px" : "160px")};
  box-sizing: border-box;
`
export default ButtonLink
