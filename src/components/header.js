import React from "react"
import logo from "../images/ETC-logo.png"
import styled from "styled-components"
import Link from "gatsby-link"
import uuid from "uuid"
import media from "styled-media-query"
import NavComponent from "./navComponent"
const Header = ({ navmenu }) => (
  <StyledHeader>
    <Link style={{ width: "110px" }} to={"/"}>
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
    <StyledNavComponent navmenu={navmenu} />
  </StyledHeader>
)

const StyledLogo = styled.img`
  height: 100%;
  margin-left 30px;
  ${media.greaterThan("950px")`
  height: 100%;
  margin-left 30px;
  `}
`
const StyledHeader = styled.div`
  height: 80px;
  white-space: nowrap;
  display: flex;
  margin-right: 30px;
  ${media.greaterThan("950px")`
  
  `}
`
const StyledNavmenu = styled.ul`
  display: none;
  ${media.greaterThan("950px")`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 15px 30px; 0 0;
  `}
`

const StyledNavitem = styled.li`
  ${media.greaterThan("950px")`
  float: left;
  a {
    display: block;
    text-align: center;
    padding: 16px;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    widht: 10ch;
    font-size: 16px;
    color: #000000;
    font-family: "StagSans-book";


  }

  `}
`

const StyledNavComponent = styled(NavComponent)`
  flex: 1;
  ${media.greaterThan("950px")``}
`

export default Header
