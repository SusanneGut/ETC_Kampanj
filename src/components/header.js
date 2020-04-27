import React from "react"
import logo from "../images/logo.png"
import styled from "styled-components"
import Link from "gatsby-link"
import uuid from "uuid"
import media from "styled-media-query"
import NavComponent from "./navComponent"
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
    <StyledNavComponent navmenu={navmenu} />
  </StyledHeader>
)

const StyledLogo = styled.img`
  height: 95px;
  width: 95px;
  position: relative;
  z-index: 1;
`
const StyledHeader = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  height: 80px;
  white-space: nowrap;
  display: flex;

  ${media.greaterThan("950px")`
    padding-right: 10%;
    padding-left: 10%;
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
