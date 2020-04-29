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
              <hr style={{ color: "#777A89" }} />
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
    margin-bottom: 2vh;
    color: #3F1A89;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .bm-item:hover {
    color: #777A89;
  }
  .bm-burger-button {
    position: absolute;
    width: 20px;
    height: 15px;
    right: 0vw;
    top: 3vh;
  }
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
    background: #FFFFFF;
    padding: 2.5em 1.5em 0;
    font-size: 28px;

  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    background: #FFFFFF;
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
  font-family: "StagSans-medium";
`
