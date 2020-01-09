import React from "react"
import styled from "styled-components"
import { slide as BurgerMenu } from "react-burger-menu"
import Link from "gatsby-link"
import media from "styled-media-query"
import uuid from "uuid"

const NavComponent = ({ className, navmenu }) => {
  return (
    <StyledDiv className={className}>
      <StyledBurgerMenu>
        <BurgerMenu right width="50%">
          {navmenu.map(navitem => (
            <Link to={"/" + navitem.slug} key={uuid.v4()}>
              {navitem.articletitle}
              <hr />
            </Link>
          ))}
        </BurgerMenu>
      </StyledBurgerMenu>
    </StyledDiv>
  )
}

export default NavComponent

const StyledBurgerMenu = styled.div`
  .bm-item {
    text-align: center;
    display: inline-block;
    text-decoration: none;
    margin-bottom: 5vh;
    color: #d1d1d1;
  }
  .bm-item:hover {
    color: white;
  }
  .bm-burger-button {
    position: absolute;
    width: 20px;
    height: 15px;
    right: 10vw;
    top: 3vh;
    ${media.greaterThan("576px")`
    right: 6vw;
`} ${media.greaterThan("768px")`
    top: 5vh;
    right: 7vw;
`}
  }
  .bm-burger-bars {
    background: #373a47;
  }
  .bm-cross-button {
    height: 30px;
    width: 15px;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-menu {
    background: #3e3e3e;
    padding: 2.5em 1.5em 0;
    font-size: 15px;
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    background: #3e3e3e;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .bm-menu-wrap {
  }
`
const StyledDiv = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
`
