import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "../components/button"
import Link from "gatsby-link"

const PuffMobileSubscriptionComponent = ({className, title, preamble, img, price, slug})=>(
    
    <StyledPuff className={className}>
     <StyledDiv className="test">
        {img ? <StyledImage fluid={img.fluid}/>:''}
        <StyledMain>
        {title ? <StyledTitle>{title}</StyledTitle>:''}
        {preamble ? <StyledText dangerouslySetInnerHTML={{__html:preamble}}/>:''}
        {price ? <h4>{price}</h4>:''}
        <Link to={slug}><Button>Välj</Button></Link>
        </StyledMain>
        </StyledDiv>
    </StyledPuff>
)

const StyledPuff = styled.div`
width: 100%;
`
const StyledMain = styled.div`
padding: 0% 5% 5% 5%;
`
const StyledText = styled.span`
p {font-size: 12px;
   color: "585858"; 
    }
`
const StyledDiv = styled.div`
width: 28%;
float:left;
margin: 2%;
background-color: white;
border-radius: 8px;

`
const StyledImage = styled(Img)`
padding: 0;
border-radius: 8px 8px 0 0;
`
const StyledTitle = styled.h4`
margin-bottom: 1%;
`


export default PuffMobileSubscriptionComponent

//puffMobileSubscriptionComponent__StyledPuff-kdbkYc cqQtvI