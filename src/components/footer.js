import React from "react"
import styled from "styled-components"

const Footer = () => (
  <StyledFooter>© {new Date().getFullYear()} ETC Utveckling</StyledFooter>
)

export default Footer

const StyledFooter = styled.div`
  font-size: 10px;
  text-align: right;
  margin-right: 8px;
  background-color: rgb(229, 229, 229);
`
