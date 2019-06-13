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
        <Link to={slug}><StyledButton>Välj</StyledButton></Link>
        </StyledMain>
        </StyledDiv>
    </StyledPuff>
)

const StyledPuff = styled.div`
width: 100%;
${media.greaterThan('1023px')`
`}
`
const StyledDiv = styled.section`
margin: 2%;
background-color: white;
border-radius: 8px;
display: flex;
${media.greaterThan('1023px')`
max-width: 28%;
float: left;
flex-direction: column;
margin: 2%;
`}
${media.lessThan('415px')`
flex-direction: row;
max-width: 100%;
`}
`
const StyledMain = styled.div`
padding: 0% 5% 5% 5%;
${media.lessThan('415px')`
flex: 0 1 2 3;
max-width: 70%;
`}
${media.greaterThan('1023px')`

`}
`
const StyledImage = styled(Img)`
padding: 0;
border-radius: 8px 8px 0 0;
${media.lessThan('415px')`
max-width: 20%;
flex: 4;
border-radius: 8px 0 0 8px;
`}
${media.greaterThan('1023px')`
flex: 0;
`}
`
const StyledTitle = styled.h4`
margin-bottom: 1%;
${media.lessThan('415px')`
font-size: 12px;
`}
`
const StyledText = styled.span`
p {font-size: 12px;
    color: "585858"; 
     }
${media.lessThan('415px')`
p {font-size: 10px;
     }
`}
`
const StyledPrice = styled.h4`
${media.lessThan('415px')`
font-size: 12px;
margin: 0;
`}
`
const StyledButton = styled(Button)`
${media.lessThan("415px")`
padding: 0;
font-size: 10px;
margin: 0;
width: 50px;
`}
`


export default PuffMobileSubscriptionComponent

//puffMobileSubscriptionComponent__StyledPuff-kdbkYc cqQtvI