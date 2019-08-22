import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "../components/button"
import Link from "gatsby-link"
import media from "styled-media-query"

const PuffMobileSubscriptionComponent = ({className, title, preamble, img, price, slug})=>(
    
    <StyledPuff className={className}>
     <StyledDiv className="test">
        {img ? <StyledImage fluid={img.fluid}/>:''}
        <StyledMain>
        {title ? <StyledTitle>{title}</StyledTitle>:''}
        {preamble ? <StyledText dangerouslySetInnerHTML={{__html:preamble}}/>:''}
        {price ? <StyledPrice>{price} kr/mån</StyledPrice>:''}
        <Link to={slug}><StyledButton small>Välj</StyledButton></Link>
        </StyledMain>
        </StyledDiv>
    </StyledPuff>
)

const StyledPuff = styled.div`
width: 100%;
`
const StyledDiv = styled.section`
margin: 2%;
background-color: white;
border-radius: 8px;
display: flex;
flex-direction: row;
max-width: 100%;
${media.greaterThan('576px')`
max-width: 28%;
float: left;
flex-direction: column;
margin: 2%;
`}
`
const StyledMain = styled.div`
padding: 0% 5% 5% 5%;
flex: 0 1 2 3;
max-width: 70%;
${media.greaterThan('576px')`
`}
`
const StyledImage = styled(Img)`
padding: 0;
max-width: 20%;
flex: 4;
border-radius: 8px 0 0 8px;
${media.greaterThan('576px')`
max-width: 100%;
border-radius: 8px 8px 0 0;
`}
`
const StyledTitle = styled.h5`
margin-bottom: 1%;
${media.greaterThan('576px')`
font-size: 16px;
`}
`
const StyledText = styled.span`
p {font-size: 10px;
     }
${media.greaterThan('576px')`
p {font-size: 11px;
     }
`}
`
const StyledPrice = styled.h5`
margin 0;
${media.greaterThan('576px')`
font-size: 16px;
`}
`
const StyledButton = styled(Button)`
${media.greaterThan("576px")`
padding: 6px;
width: 100px;
font-size: 10px;
`}
`


export default PuffMobileSubscriptionComponent

//puffMobileSubscriptionComponent__StyledPuff-kdbkYc cqQtvI