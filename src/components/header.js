import React from "react"
import logo from "../images/ETC-logo.png"
import styled from "styled-components"
import Link from "gatsby-link"
import uuid from "uuid"
import ButtonLink from "./buttonLink"

const Header = ({ navmenu }) => (
  <StyledHeader>
    <Link to={"/"}>
      <StyledLogo src={logo} />
    </Link>
    <StyledNavmenu>
      {navmenu.map(navitem => (
        <StyledNavitem>
          <Link to={"/" + navitem.slug} key={uuid.v4()}>
            {navitem.articletitle}
          </Link>
        </StyledNavitem>
      ))}{" "}
    </StyledNavmenu>{" "}
    <StyledButtonLink to={"/"}>Beställ här</StyledButtonLink>
  </StyledHeader>
)

const StyledLogo = styled.img`
  height: 100%;
  margin-left 80px;
`
const StyledHeader = styled.div`
  height: 80px;
  white-space: nowrap;
  display: flex;
`
const StyledNavmenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: inline-block;
  margin-top: 15px;
`

const StyledNavitem = styled.li`
  float: left;
  a {
    display: block;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }
`
const StyledButtonLink = styled(ButtonLink)`
  color: #ffffff;
  background-color: #3f1a89;
  max-height: 45px;
  margin-top: 15px;
`
export default Header
