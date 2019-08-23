import React from "react"
import styled from "styled-components"
import { slide as BurgerMenu } from 'react-burger-menu'
import Link from "gatsby-link"
import media from "styled-media-query"

const NavComponent = ({className, slug}) => {
    return(
    <div className={className}>
          <StyledBurgerMenu>
            <BurgerMenu right width='50%'>
                <Link to='/ETC_lagom'>Våra abonnemang</Link>
                <Link to='/Varfor_startade_vi_etc_mobil'>Om oss</Link>
                <Link to='/Kundtjanst'>Kundtjänst</Link>
                <Link to='/Anvandaravtal'>Avtal</Link>
            </BurgerMenu>
        </StyledBurgerMenu>
    </div>
    )
}

export default NavComponent

const StyledBurgerMenu = styled.div`
.bm-item {
    text-align:center;  
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
    right: 15vw;
    top: 5vh;
    ${media.greaterThan('576px')`
    right: 20vw;
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
    background: #3E3E3E;
    padding: 2.5em 1.5em 0;
    font-size: 15px;
}
.bm-morph-shape {
    fill: #373a47;
}
.bm-item-list {
    background: #3E3E3E;
}

.bm-overlay {
    background: rgba(0, 0, 0, 0.3);
}
.bm-menu-wrap {
}
`